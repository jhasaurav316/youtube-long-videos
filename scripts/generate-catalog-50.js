#!/usr/bin/env node
// ============================================================================
// 50 Videos Catalog Generator (10-15 min each)
// ============================================================================
// Generates 50 long video compilations with 4-5 chapters each.
// Duration: 10-15 minutes per video (varied).
//
// Usage: node scripts/generate-catalog-50.js
// ============================================================================

const path = require("path");
const fs = require("fs");

const SHORTS_ROOT = path.resolve(__dirname, "..", "..", "youtube-shorts-bulk");
// Fallback: if shorts root doesn't exist, use local category folders
const LOCAL_ROOT = path.resolve(__dirname, "..");
const OUTPUT_PATH = path.join(__dirname, "catalog-50.json");

const TARGET = 50;
const MIN_CHAPTERS = 4; // ~10 min
const MAX_CHAPTERS = 5; // ~15 min

const CATEGORY_FOLDERS = [
  "animal-names", "bird-names", "fruit-names", "vegetable-names",
  "flower-names", "sea-creature-names", "insect-names", "dinosaur-names",
  "instrument-names", "vehicle-names", "country-names", "sport-names",
  "food-names", "color-shape-names", "space-names",
];

const CATEGORY_LABELS = {
  "animal-names": "Animals",
  "bird-names": "Birds",
  "fruit-names": "Fruits",
  "vegetable-names": "Vegetables",
  "flower-names": "Flowers",
  "sea-creature-names": "Sea Creatures",
  "insect-names": "Insects",
  "dinosaur-names": "Dinosaurs",
  "instrument-names": "Musical Instruments",
  "vehicle-names": "Vehicles",
  "country-names": "Countries",
  "sport-names": "Sports",
  "food-names": "Foods",
  "color-shape-names": "Colors & Shapes",
  "space-names": "Space",
};

function seededRandom(seed) {
  let s = seed;
  return function () {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    return s / 0x7fffffff;
  };
}

function main() {
  console.log("============================================");
  console.log("  50 Videos Catalog Generator (10-15 min)");
  console.log("============================================\n");

  const allThemes = [];
  const byCategory = {};

  for (const folder of CATEGORY_FOLDERS) {
    // Try shorts root first, then local
    let catalogPath = path.join(SHORTS_ROOT, folder, "catalog.json");
    if (!fs.existsSync(catalogPath)) {
      catalogPath = path.join(LOCAL_ROOT, folder, "catalog.json");
    }
    if (!fs.existsSync(catalogPath)) {
      console.warn(`  ⚠️  Skipping ${folder}`);
      continue;
    }

    const catalog = JSON.parse(fs.readFileSync(catalogPath, "utf-8"));
    const entries = Array.isArray(catalog) ? catalog : catalog.videos || [];
    console.log(`  ✅ ${folder}: ${entries.length} themes`);

    byCategory[folder] = [];
    for (const entry of entries) {
      const theme = {
        themeId: entry.id,
        title: entry.title,
        bgGradient: entry.bgGradient,
        accentColor: entry.accentColor,
        items: entry.items || [],
        category: folder,
        categoryLabel: CATEGORY_LABELS[folder] || folder,
      };
      allThemes.push(theme);
      byCategory[folder].push(theme);
    }
  }

  console.log(`\n  Total themes: ${allThemes.length}`);

  const categoryKeys = Object.keys(byCategory);
  const longVideos = [];
  let videoNum = 1;
  const rand = seededRandom(77);

  function getChapterCount() {
    return MIN_CHAPTERS + Math.floor(rand() * (MAX_CHAPTERS - MIN_CHAPTERS + 1));
  }

  function pickThemes(pool, count, offset) {
    const result = [];
    for (let i = 0; i < count; i++) {
      result.push(pool[(offset + i) % pool.length]);
    }
    return result;
  }

  function makeVideo(id, title, category, chapters) {
    const itemDurations = [4, 4.5, 5, 5.5];
    const itemDuration = itemDurations[Math.floor(rand() * itemDurations.length)];

    return {
      id,
      title,
      category,
      chapters: chapters.map((t) => ({
        themeId: t.themeId,
        title: t.title,
        bgGradient: t.bgGradient,
        accentColor: t.accentColor,
        items: t.items,
      })),
      itemDuration,
      chapterIntroDuration: 3,
      chapterOutroDuration: 3,
      videoIntroDuration: 8,
      videoOutroDuration: 10,
      chapterTransitionDuration: 4,
    };
  }

  // Strategy 1: One video per category (15 videos)
  for (const folder of categoryKeys) {
    if (longVideos.length >= 15) break;
    const themes = byCategory[folder];
    const label = CATEGORY_LABELS[folder];
    const chapCount = getChapterCount();
    const batch = pickThemes(themes, chapCount, 0);

    const id = `vid-${String(videoNum).padStart(3, "0")}`;
    const title = `Learn ${label} A to Z - Compilation`;

    longVideos.push(makeVideo(id, title, folder, batch));
    videoNum++;
  }
  console.log(`  Single-category: ${longVideos.length} videos`);

  // Strategy 2: Pair mixes (20 videos)
  for (let a = 0; a < categoryKeys.length && longVideos.length < 35; a++) {
    for (let b = a + 1; b < categoryKeys.length && longVideos.length < 35; b++) {
      const catA = byCategory[categoryKeys[a]];
      const catB = byCategory[categoryKeys[b]];
      const labelA = CATEGORY_LABELS[categoryKeys[a]];
      const labelB = CATEGORY_LABELS[categoryKeys[b]];

      const chapCount = getChapterCount();
      const halfA = Math.ceil(chapCount / 2);
      const halfB = chapCount - halfA;
      const batch = [
        ...pickThemes(catA, halfA, a * 3),
        ...pickThemes(catB, halfB, b * 5),
      ];

      const id = `vid-${String(videoNum).padStart(3, "0")}`;
      const title = `${labelA} & ${labelB} A to Z - Mix`;

      longVideos.push(makeVideo(id, title, "pair-mix", batch));
      videoNum++;
    }
  }
  console.log(`  After pair mixes: ${longVideos.length} videos`);

  // Strategy 3: Cross-category to reach 50
  let mixIdx = 0;
  while (longVideos.length < TARGET) {
    const chapCount = getChapterCount();
    const batch = [];
    for (let j = 0; j < chapCount; j++) {
      const catIdx = (mixIdx * 3 + j * 7) % categoryKeys.length;
      const cat = categoryKeys[catIdx];
      const themes = byCategory[cat];
      batch.push(themes[(mixIdx * 5 + j * 11) % themes.length]);
    }

    const id = `vid-${String(videoNum).padStart(3, "0")}`;
    const categories = [...new Set(batch.map((t) => t.categoryLabel))];
    const title = `A to Z Learning - ${categories.slice(0, 3).join(" & ")} Mix`;

    longVideos.push(makeVideo(id, title, "mix", batch));
    videoNum++;
    mixIdx++;
  }

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(longVideos, null, 2));

  // Stats
  const durations = longVideos.map((v) => {
    const chapDur = v.chapters.reduce((sum, ch) => {
      return sum + v.chapterTransitionDuration + v.chapterIntroDuration +
        ch.items.length * v.itemDuration + v.chapterOutroDuration;
    }, 0);
    return v.videoIntroDuration + chapDur + v.videoOutroDuration;
  });

  const minDur = Math.round(Math.min(...durations) / 60);
  const maxDur = Math.round(Math.max(...durations) / 60);
  const avgDur = Math.round(durations.reduce((a, b) => a + b, 0) / durations.length / 60);
  const totalHours = Math.round(durations.reduce((a, b) => a + b, 0) / 3600);

  console.log("\n============================================");
  console.log(`  Generated: ${longVideos.length} videos`);
  console.log(`  Duration: ${minDur}-${maxDur} min (avg ${avgDur} min)`);
  console.log(`  Total content: ~${totalHours} hours`);
  console.log(`  Output: ${OUTPUT_PATH}`);
  console.log("============================================\n");
}

main();
