#!/usr/bin/env node
// ============================================================================
// Long Video Catalog Generator
// ============================================================================
// Reads all category catalog.json files and groups them into 100 long video
// compilations of 5 chapters each. Outputs long-video/catalog.json.
//
// Usage:
//   node long-video/generate-catalog.js
// ============================================================================

const path = require("path");
const fs = require("fs");

const PROJECT_ROOT = path.resolve(__dirname, "..");
const SHORTS_ROOT = path.resolve(__dirname, "..", "..", "youtube-shorts-bulk");
const OUTPUT_PATH = path.join(__dirname, "catalog.json");

// Category folders that have catalog.json
const CATEGORY_FOLDERS = [
  "animal-names",
  "bird-names",
  "fruit-names",
  "vegetable-names",
  "flower-names",
  "sea-creature-names",
  "insect-names",
  "dinosaur-names",
  "instrument-names",
  "vehicle-names",
  "country-names",
  "sport-names",
  "food-names",
  "color-shape-names",
  "space-names",
];

// Nice display names for categories
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

function main() {
  console.log("============================================");
  console.log("  Long Video Catalog Generator");
  console.log("============================================\n");

  // Load all themes from all categories
  const allThemes = [];

  for (const folder of CATEGORY_FOLDERS) {
    const catalogPath = path.join(SHORTS_ROOT, folder, "catalog.json");
    if (!fs.existsSync(catalogPath)) {
      console.warn(`  ⚠️  Skipping ${folder} (no catalog.json)`);
      continue;
    }

    const catalog = JSON.parse(fs.readFileSync(catalogPath, "utf-8"));
    const entries = Array.isArray(catalog) ? catalog : catalog.videos || [];

    console.log(`  ✅ ${folder}: ${entries.length} themes`);

    for (const entry of entries) {
      allThemes.push({
        themeId: entry.id,
        title: entry.title,
        bgGradient: entry.bgGradient,
        accentColor: entry.accentColor,
        items: entry.items || [],
        category: folder,
        categoryLabel: CATEGORY_LABELS[folder] || folder,
      });
    }
  }

  console.log(`\n  Total themes: ${allThemes.length}`);

  // ─── Strategy: Group into videos of 5 chapters ─────────────────
  const CHAPTERS_PER_VIDEO = 5;
  const longVideos = [];
  let videoNum = 1;

  // Phase 1: Category-grouped compilations (same category per video where possible)
  const byCategory = {};
  for (const theme of allThemes) {
    if (!byCategory[theme.category]) byCategory[theme.category] = [];
    byCategory[theme.category].push(theme);
  }

  // Create videos from each category
  const usedThemeIds = new Set();

  for (const folder of CATEGORY_FOLDERS) {
    const themes = byCategory[folder] || [];
    const label = CATEGORY_LABELS[folder] || folder;

    for (let i = 0; i < themes.length; i += CHAPTERS_PER_VIDEO) {
      const batch = themes.slice(i, i + CHAPTERS_PER_VIDEO);
      if (batch.length < 3) continue; // Need at least 3 chapters for a good video

      const id = `long-video-${String(videoNum).padStart(3, "0")}`;
      const partNum = Math.floor(i / CHAPTERS_PER_VIDEO) + 1;
      const totalParts = Math.ceil(themes.length / CHAPTERS_PER_VIDEO);

      let title;
      if (totalParts > 1) {
        title = `Learn ${label} A to Z - Mega Compilation Part ${partNum}`;
      } else {
        title = `Learn ${label} A to Z - Complete Compilation`;
      }

      longVideos.push({
        id,
        title,
        category: folder,
        chapters: batch.map((t) => ({
          themeId: t.themeId,
          title: t.title,
          bgGradient: t.bgGradient,
          accentColor: t.accentColor,
          items: t.items,
        })),
        itemDuration: 5,
        chapterIntroDuration: 3,
        chapterOutroDuration: 3,
        videoIntroDuration: 10,
        videoOutroDuration: 15,
        chapterTransitionDuration: 5,
      });

      batch.forEach((t) => usedThemeIds.add(t.themeId));
      videoNum++;
    }
  }

  console.log(`  Category compilations: ${longVideos.length} videos`);

  // Phase 2: Mixed-category "Best Of" compilations to reach 100
  const remaining = allThemes.filter((t) => !usedThemeIds.has(t.themeId));
  console.log(`  Remaining themes: ${remaining.length}`);

  // Create mixed compilations from remaining
  for (let i = 0; i < remaining.length; i += CHAPTERS_PER_VIDEO) {
    const batch = remaining.slice(i, i + CHAPTERS_PER_VIDEO);
    if (batch.length < 3) break;

    const id = `long-video-${String(videoNum).padStart(3, "0")}`;
    const categories = [...new Set(batch.map((t) => t.categoryLabel))];
    const title = `Learn ${categories.slice(0, 3).join(", ")} & More - A to Z Compilation`;

    longVideos.push({
      id,
      title,
      category: "mixed",
      chapters: batch.map((t) => ({
        themeId: t.themeId,
        title: t.title,
        bgGradient: t.bgGradient,
        accentColor: t.accentColor,
        items: t.items,
      })),
      itemDuration: 5,
      chapterIntroDuration: 3,
      chapterOutroDuration: 3,
      videoIntroDuration: 10,
      videoOutroDuration: 15,
      chapterTransitionDuration: 5,
    });

    videoNum++;
  }

  // Phase 3: Cross-category mixes to reach 500 videos
  const TARGET = 500;
  const categoryKeys = Object.keys(byCategory);
  const allThemesList = [...allThemes]; // full list for reuse

  // Mix Strategy 1: Pair-category compilations (2 categories per video)
  console.log(`  ${longVideos.length} videos so far, generating pair mixes...`);
  for (let a = 0; a < categoryKeys.length && longVideos.length < 250; a++) {
    for (let b = a + 1; b < categoryKeys.length && longVideos.length < 250; b++) {
      const catA = byCategory[categoryKeys[a]];
      const catB = byCategory[categoryKeys[b]];
      const labelA = CATEGORY_LABELS[categoryKeys[a]];
      const labelB = CATEGORY_LABELS[categoryKeys[b]];

      // Pick 3 from catA, 2 from catB
      for (let s = 0; s < catA.length && longVideos.length < 250; s += 3) {
        const batch = [
          ...catA.slice(s, s + 3),
          ...catB.slice(s % catB.length, (s % catB.length) + 2),
        ].slice(0, CHAPTERS_PER_VIDEO);

        if (batch.length < 3) continue;

        const id = `long-video-${String(videoNum).padStart(3, "0")}`;
        const title = `${labelA} & ${labelB} A to Z - Compilation ${Math.floor(s / 3) + 1}`;

        longVideos.push({
          id,
          title,
          category: "pair-mix",
          chapters: batch.map((t) => ({
            themeId: t.themeId,
            title: t.title,
            bgGradient: t.bgGradient,
            accentColor: t.accentColor,
            items: t.items,
          })),
          itemDuration: 5,
          chapterIntroDuration: 3,
          chapterOutroDuration: 3,
          videoIntroDuration: 10,
          videoOutroDuration: 15,
          chapterTransitionDuration: 5,
        });
        videoNum++;
      }
    }
  }

  console.log(`  After pair mixes: ${longVideos.length} videos`);

  // Mix Strategy 2: Triple-category compilations
  console.log(`  Generating triple-category mixes...`);
  for (let a = 0; a < categoryKeys.length && longVideos.length < 400; a++) {
    for (let b = a + 1; b < categoryKeys.length && longVideos.length < 400; b++) {
      for (let c = b + 1; c < categoryKeys.length && longVideos.length < 400; c++) {
        const cats = [categoryKeys[a], categoryKeys[b], categoryKeys[c]];
        const labels = cats.map((k) => CATEGORY_LABELS[k]);
        const batch = [];

        for (let j = 0; j < CHAPTERS_PER_VIDEO; j++) {
          const cat = byCategory[cats[j % cats.length]];
          batch.push(cat[(j * 7 + a + b + c) % cat.length]);
        }

        const id = `long-video-${String(videoNum).padStart(3, "0")}`;
        const title = `Learn ${labels.join(", ")} - A to Z Mix`;

        longVideos.push({
          id,
          title,
          category: "triple-mix",
          chapters: batch.map((t) => ({
            themeId: t.themeId,
            title: t.title,
            bgGradient: t.bgGradient,
            accentColor: t.accentColor,
            items: t.items,
          })),
          itemDuration: 5,
          chapterIntroDuration: 3,
          chapterOutroDuration: 3,
          videoIntroDuration: 10,
          videoOutroDuration: 15,
          chapterTransitionDuration: 5,
        });
        videoNum++;
      }
    }
  }

  console.log(`  After triple mixes: ${longVideos.length} videos`);

  // Mix Strategy 3: Random cross-category to fill remaining up to 500
  let mixIndex = 0;
  while (longVideos.length < TARGET) {
    const batch = [];
    for (let j = 0; j < CHAPTERS_PER_VIDEO; j++) {
      const catIdx = (mixIndex * 3 + j * 7) % categoryKeys.length;
      const cat = categoryKeys[catIdx];
      const themes = byCategory[cat];
      const themeIdx = (mixIndex * 5 + j * 11) % themes.length;
      batch.push(themes[themeIdx]);
    }

    const id = `long-video-${String(videoNum).padStart(3, "0")}`;
    const categories = [...new Set(batch.map((t) => t.categoryLabel))];
    const title = `A to Z Learning Mix - ${categories.slice(0, 3).join(" & ")} Edition ${longVideos.length - 399}`;

    longVideos.push({
      id,
      title,
      category: "mix",
      chapters: batch.map((t) => ({
        themeId: t.themeId,
        title: t.title,
        bgGradient: t.bgGradient,
        accentColor: t.accentColor,
        items: t.items,
      })),
      itemDuration: 5,
      chapterIntroDuration: 3,
      chapterOutroDuration: 3,
      videoIntroDuration: 10,
      videoOutroDuration: 15,
      chapterTransitionDuration: 5,
    });

    videoNum++;
    mixIndex++;
  }

  // Write catalog
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(longVideos, null, 2));

  // Summary
  console.log("\n============================================");
  console.log(`  Generated: ${longVideos.length} long video definitions`);
  console.log(`  Output: ${OUTPUT_PATH}`);
  console.log("============================================");

  // Duration estimate
  const sampleVideo = longVideos[0];
  const chapDuration =
    sampleVideo.chapterTransitionDuration +
    sampleVideo.chapterIntroDuration +
    sampleVideo.chapters[0].items.length * sampleVideo.itemDuration +
    sampleVideo.chapterOutroDuration;
  const totalDuration =
    sampleVideo.videoIntroDuration +
    sampleVideo.chapters.length * chapDuration +
    sampleVideo.videoOutroDuration;

  console.log(`\n  Per video (~${sampleVideo.chapters.length} chapters):`);
  console.log(`    Duration: ~${Math.round(totalDuration / 60)} minutes`);
  console.log(
    `    Frames:   ~${totalDuration * 30} at 30fps`
  );
  console.log(`    Format:   1920x1080 (landscape)`);
  console.log("");
}

main();
