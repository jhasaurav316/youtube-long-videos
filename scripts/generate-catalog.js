#!/usr/bin/env node
// ============================================================================
// Long Video Catalog Generator - 1000 Videos (30-40 min each)
// ============================================================================
// Reads all category catalog.json files and generates 1000 long video
// compilations with 11-15 chapters each (varied lengths).
//
// Usage:
//   node scripts/generate-catalog.js
// ============================================================================

const path = require("path");
const fs = require("fs");

const PROJECT_ROOT = path.resolve(__dirname, "..");
const SHORTS_ROOT = path.resolve(__dirname, "..", "..", "youtube-shorts-bulk");
const OUTPUT_PATH = path.join(__dirname, "catalog.json");

const TARGET = 1000;
const MIN_CHAPTERS = 11; // ~30 min
const MAX_CHAPTERS = 15; // ~40 min

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

// Deterministic pseudo-random based on seed
function seededRandom(seed) {
  let s = seed;
  return function () {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    return s / 0x7fffffff;
  };
}

function main() {
  console.log("============================================");
  console.log("  Long Video Catalog Generator - 1000 Videos");
  console.log("============================================\n");

  // Load all themes
  const allThemes = [];
  const byCategory = {};

  for (const folder of CATEGORY_FOLDERS) {
    const catalogPath = path.join(SHORTS_ROOT, folder, "catalog.json");
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
  const rand = seededRandom(42);

  // Get shuffled chapter count (11-15) for each video
  function getChapterCount() {
    return MIN_CHAPTERS + Math.floor(rand() * (MAX_CHAPTERS - MIN_CHAPTERS + 1));
  }

  // Pick N themes from a pool with offset for variety
  function pickThemes(pool, count, offset) {
    const result = [];
    for (let i = 0; i < count; i++) {
      result.push(pool[(offset + i) % pool.length]);
    }
    return result;
  }

  function makeVideo(id, title, category, chapters) {
    // Vary item duration slightly: 4, 4.5, 5, or 5.5 seconds
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
      videoIntroDuration: 10,
      videoOutroDuration: 15,
      chapterTransitionDuration: 5,
    };
  }

  // ─── Strategy 1: Single-category deep dives (~200 videos) ─────────
  console.log("\n  Generating single-category compilations...");
  let offset = 0;
  for (const folder of CATEGORY_FOLDERS) {
    const themes = byCategory[folder];
    const label = CATEGORY_LABELS[folder];

    // Create multiple videos per category with different chapter counts
    for (let s = 0; s < themes.length && longVideos.length < 200; s += 3) {
      const chapCount = getChapterCount();
      const batch = pickThemes(themes, chapCount, s);

      const id = `long-video-${String(videoNum).padStart(4, "0")}`;
      const partNum = Math.floor(s / 3) + 1;
      const title = `Learn ${label} A to Z - Mega Compilation Part ${partNum}`;

      longVideos.push(makeVideo(id, title, folder, batch));
      videoNum++;
    }
  }
  console.log(`  Single-category: ${longVideos.length} videos`);

  // ─── Strategy 2: Pair-category mixes (~300 videos) ────────────────
  console.log("  Generating pair-category mixes...");
  for (let a = 0; a < categoryKeys.length && longVideos.length < 500; a++) {
    for (let b = a + 1; b < categoryKeys.length && longVideos.length < 500; b++) {
      const catA = byCategory[categoryKeys[a]];
      const catB = byCategory[categoryKeys[b]];
      const labelA = CATEGORY_LABELS[categoryKeys[a]];
      const labelB = CATEGORY_LABELS[categoryKeys[b]];

      // 2 videos per pair
      for (let v = 0; v < 2 && longVideos.length < 500; v++) {
        const chapCount = getChapterCount();
        const halfA = Math.ceil(chapCount / 2);
        const halfB = chapCount - halfA;

        const batch = [
          ...pickThemes(catA, halfA, v * 5),
          ...pickThemes(catB, halfB, v * 7),
        ];

        const id = `long-video-${String(videoNum).padStart(4, "0")}`;
        const title = `${labelA} & ${labelB} A to Z - Compilation ${v + 1}`;

        longVideos.push(makeVideo(id, title, "pair-mix", batch));
        videoNum++;
      }
    }
  }
  console.log(`  After pair mixes: ${longVideos.length} videos`);

  // ─── Strategy 3: Triple-category mixes (~250 videos) ──────────────
  console.log("  Generating triple-category mixes...");
  for (let a = 0; a < categoryKeys.length && longVideos.length < 750; a++) {
    for (let b = a + 1; b < categoryKeys.length && longVideos.length < 750; b++) {
      for (let c = b + 1; c < categoryKeys.length && longVideos.length < 750; c++) {
        const cats = [categoryKeys[a], categoryKeys[b], categoryKeys[c]];
        const labels = cats.map((k) => CATEGORY_LABELS[k]);
        const chapCount = getChapterCount();

        const batch = [];
        for (let j = 0; j < chapCount; j++) {
          const cat = byCategory[cats[j % cats.length]];
          batch.push(cat[(j * 7 + a * 3 + b * 5 + c * 2) % cat.length]);
        }

        const id = `long-video-${String(videoNum).padStart(4, "0")}`;
        const title = `Learn ${labels.join(", ")} - A to Z Mix`;

        longVideos.push(makeVideo(id, title, "triple-mix", batch));
        videoNum++;
      }
    }
  }
  console.log(`  After triple mixes: ${longVideos.length} videos`);

  // ─── Strategy 4: 4-5 category mega mixes to reach 1000 ───────────
  console.log("  Generating mega cross-category mixes...");
  let megaIdx = 0;
  while (longVideos.length < TARGET) {
    const chapCount = getChapterCount();
    const batch = [];

    // Pick from 4-5 different categories
    const numCats = 4 + Math.floor(rand() * 2); // 4 or 5
    for (let j = 0; j < chapCount; j++) {
      const catIdx = (megaIdx * 3 + j * 7) % categoryKeys.length;
      const cat = categoryKeys[catIdx];
      const themes = byCategory[cat];
      const themeIdx = (megaIdx * 11 + j * 5) % themes.length;
      batch.push(themes[themeIdx]);
    }

    const id = `long-video-${String(videoNum).padStart(4, "0")}`;
    const categories = [...new Set(batch.map((t) => t.categoryLabel))];
    const num = longVideos.length - 749;
    const title = `A to Z Learning Adventure - ${categories.slice(0, 3).join(" & ")} Mix ${num}`;

    longVideos.push(makeVideo(id, title, "mega-mix", batch));
    videoNum++;
    megaIdx++;
  }
  console.log(`  After mega mixes: ${longVideos.length} videos`);

  // ─── Write catalog ────────────────────────────────────────────────
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(longVideos, null, 2));

  // ─── Summary ──────────────────────────────────────────────────────
  console.log("\n============================================");
  console.log(`  Generated: ${longVideos.length} long video definitions`);
  console.log(`  Output: ${OUTPUT_PATH}`);
  console.log("============================================");

  // Duration stats
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

  // Chapter count distribution
  const chapCounts = {};
  longVideos.forEach((v) => {
    const c = v.chapters.length;
    chapCounts[c] = (chapCounts[c] || 0) + 1;
  });

  console.log(`\n  Duration range: ${minDur}-${maxDur} minutes`);
  console.log(`  Average: ${avgDur} min per video`);
  console.log(`  Total content: ~${totalHours} hours`);
  console.log(`\n  Chapter distribution:`);
  Object.keys(chapCounts).sort().forEach((k) => {
    console.log(`    ${k} chapters: ${chapCounts[k]} videos`);
  });
  console.log(`\n  Format: 1920x1080 (landscape) @ 30fps`);
  console.log("");
}

main();
