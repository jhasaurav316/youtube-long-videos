#!/usr/bin/env node
// ============================================================================
// Auto-Register Long Video Compositions in LongVideoRoot.tsx
// ============================================================================
// Reads long-video/catalog.json and generates src/LongVideoRoot.tsx with
// all 100 landscape (1920x1080) Remotion compositions.
//
// Usage:
//   node long-video/register-compositions.js
// ============================================================================

const path = require("path");
const fs = require("fs");

const PROJECT_ROOT = path.resolve(__dirname, "..");
const CATALOG_PATH = path.join(__dirname, "catalog.json");
const ROOT_TSX_PATH = path.join(PROJECT_ROOT, "src", "LongVideoRoot.tsx");
const BACKUP_PATH = path.join(PROJECT_ROOT, "src", "LongVideoRoot.tsx.backup");

const FPS = 30;

// Convert "long-video-001" to "LongVideo001"
function toPascalCase(str) {
  return str
    .split(/[-_\s]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");
}

// Calculate total duration in frames for a long video
function calcDurationInFrames(video) {
  const itemDuration = video.itemDuration || 5;
  const chapterIntroDuration = video.chapterIntroDuration || 3;
  const chapterOutroDuration = video.chapterOutroDuration || 3;
  const videoIntroDuration = video.videoIntroDuration || 10;
  const videoOutroDuration = video.videoOutroDuration || 15;
  const chapterTransitionDuration = video.chapterTransitionDuration || 5;

  let totalSeconds = videoIntroDuration;

  for (const chapter of video.chapters) {
    totalSeconds += chapterTransitionDuration;
    totalSeconds += chapterIntroDuration;
    totalSeconds += (chapter.items || []).length * itemDuration;
    totalSeconds += chapterOutroDuration;
  }

  totalSeconds += videoOutroDuration;

  return Math.round(totalSeconds * FPS);
}

function main() {
  console.log("============================================");
  console.log("  Register Long Video Compositions");
  console.log("============================================\n");

  if (!fs.existsSync(CATALOG_PATH)) {
    console.error("ERROR: catalog.json not found. Run generate-catalog.js first.");
    process.exit(1);
  }

  const catalog = JSON.parse(fs.readFileSync(CATALOG_PATH, "utf-8"));
  console.log(`Found ${catalog.length} long videos in catalog.`);

  // Backup existing file
  if (fs.existsSync(ROOT_TSX_PATH)) {
    fs.copyFileSync(ROOT_TSX_PATH, BACKUP_PATH);
    console.log("Backed up existing LongVideoRoot.tsx");
  }

  // Generate LongVideoRoot.tsx
  let content = "";

  // Imports
  content += `import { Composition } from "remotion";\n`;
  content += `import { LandscapeCompilationTemplate } from "./LandscapeCompilationTemplate";\n`;
  content += `import type { LandscapeCompilationProps } from "./LandscapeCompilationTemplate";\n`;
  content += `import React from "react";\n`;
  content += `\n`;

  content += `export const LongVideoRemotionRoot: React.FC = () => {\n`;
  content += `  return (\n`;
  content += `    <>\n`;

  for (const video of catalog) {
    const compId = toPascalCase(video.id);
    const durationInFrames = calcDurationInFrames(video);

    // Build chapters array string
    const chaptersStr = JSON.stringify(
      video.chapters.map((ch) => ({
        themeId: ch.themeId,
        title: ch.title,
        bgGradient: ch.bgGradient,
        accentColor: ch.accentColor,
        items: ch.items,
      })),
      null,
      10
    )
      .split("\n")
      .map((line, i) => (i === 0 ? line : "          " + line.trim()))
      .join("\n");

    content += `      <Composition\n`;
    content += `        id="${compId}"\n`;
    content += `        component={LandscapeCompilationTemplate}\n`;
    content += `        durationInFrames={${durationInFrames}}\n`;
    content += `        fps={${FPS}}\n`;
    content += `        width={1920}\n`;
    content += `        height={1080}\n`;
    content += `        defaultProps={{\n`;
    content += `          title: ${JSON.stringify(video.title)},\n`;
    content += `          videoId: ${JSON.stringify(video.id)},\n`;
    content += `          chapters: ${chaptersStr},\n`;
    content += `          itemDuration: ${video.itemDuration || 5},\n`;
    content += `          chapterIntroDuration: ${video.chapterIntroDuration || 3},\n`;
    content += `          chapterOutroDuration: ${video.chapterOutroDuration || 3},\n`;
    content += `          videoIntroDuration: ${video.videoIntroDuration || 10},\n`;
    content += `          videoOutroDuration: ${video.videoOutroDuration || 15},\n`;
    content += `          chapterTransitionDuration: ${video.chapterTransitionDuration || 5},\n`;
    content += `        }}\n`;
    content += `      />\n`;
  }

  content += `    </>\n`;
  content += `  );\n`;
  content += `};\n`;

  fs.writeFileSync(ROOT_TSX_PATH, content, "utf-8");

  console.log(`\nLongVideoRoot.tsx generated!`);
  console.log(`  Compositions: ${catalog.length}`);
  console.log(`  Format: 1920x1080 (landscape)`);
  console.log(`  FPS: ${FPS}`);
  console.log(`  File: ${ROOT_TSX_PATH}`);

  // Duration info
  const sample = catalog[0];
  const frames = calcDurationInFrames(sample);
  console.log(
    `\n  Sample video "${sample.id}": ${frames} frames = ${Math.round(frames / FPS / 60)} min`
  );
  console.log("");
}

main();
