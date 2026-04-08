#!/usr/bin/env node
// ============================================================================
// Auto-Register All Fruit Name Compositions in FruitRoot.tsx
// ============================================================================
// Reads fruit-names/catalog.json and generates a new FruitRoot.tsx that
// registers every video as a portrait (1080x1920) Remotion composition.
//
// Usage:
//   node fruit-names/register-compositions.js
// ============================================================================

const path = require("path");
const fs = require("fs");

// ---------- Configuration ----------
const PROJECT_ROOT = path.resolve(__dirname, "..");
const CATALOG_PATH = path.join(PROJECT_ROOT, "fruit-names", "catalog.json");
const ROOT_TSX_PATH = path.join(PROJECT_ROOT, "src", "FruitRoot.tsx");
const BACKUP_PATH = path.join(PROJECT_ROOT, "src", "FruitRoot.tsx.backup");

const FPS = 30;

// ---------- Helpers ----------

// Convert an id like "fruits-tropical-fruits-1" to PascalCase "FruitsTropicalFruits1"
function toPascalCase(str) {
  return str
    .split(/[-_\s]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");
}

// Calculate duration in frames for a video
function calcDurationInFrames(video) {
  const letterDuration = video.letterDuration || 3; // seconds per letter
  const introDuration = video.introDuration || 3;   // intro seconds
  const outroDuration = video.outroDuration || 3;   // outro seconds
  const itemCount = (video.items || []).length;

  const totalSeconds = introDuration + itemCount * letterDuration + outroDuration;
  return Math.round(totalSeconds * FPS);
}

// ---------- Main ----------
function main() {
  console.log("============================================");
  console.log("  Register All Fruit Names in FruitRoot.tsx");
  console.log("============================================\n");

  // Load catalog
  if (!fs.existsSync(CATALOG_PATH)) {
    console.error(`ERROR: catalog.json not found at ${CATALOG_PATH}`);
    process.exit(1);
  }

  const catalog = JSON.parse(fs.readFileSync(CATALOG_PATH, "utf-8"));
  const videos = Array.isArray(catalog) ? catalog : catalog.videos || [];

  if (videos.length === 0) {
    console.error("ERROR: No videos found in catalog.");
    process.exit(1);
  }

  console.log(`Found ${videos.length} videos in catalog.`);

  // Back up existing FruitRoot.tsx
  if (fs.existsSync(ROOT_TSX_PATH)) {
    fs.copyFileSync(ROOT_TSX_PATH, BACKUP_PATH);
    console.log(`Backed up existing FruitRoot.tsx to FruitRoot.tsx.backup`);
  }

  // ---------- Generate FruitRoot.tsx content ----------
  let content = "";

  // Imports
  content += `import "./index.css";\n`;
  content += `import { Composition } from "remotion";\n`;
  content += `import { AlphabetShortsTemplate } from "./AlphabetShortsTemplate";\n`;
  content += `import type { AlphabetShortsProps } from "./AlphabetShortsTemplate";\n`;
  content += `import React from "react";\n`;
  content += `\n`;

  // RemotionRoot component
  content += `export const FruitRemotionRoot: React.FC = () => {\n`;
  content += `  return (\n`;
  content += `    <>\n`;

  // Generate compositions
  for (const video of videos) {
    const videoId = video.id;
    const compId = toPascalCase(videoId);
    const durationInFrames = calcDurationInFrames(video);

    // Map "items" from catalog to "letters" prop for the template
    const lettersStr = JSON.stringify(video.items || [], null, 10)
      .split("\n")
      .map((line, i) => (i === 0 ? line : "          " + line.trim()))
      .join("\n");

    // Build bgGradient array string
    const bgGradientStr = JSON.stringify(video.bgGradient || []);

    content += `      <Composition\n`;
    content += `        id="${compId}"\n`;
    content += `        component={AlphabetShortsTemplate}\n`;
    content += `        durationInFrames={${durationInFrames}}\n`;
    content += `        fps={${FPS}}\n`;
    content += `        width={1080}\n`;
    content += `        height={1920}\n`;
    content += `        defaultProps={{\n`;
    content += `          title: ${JSON.stringify(video.title)},\n`;
    content += `          videoId: ${JSON.stringify(videoId)},\n`;
    content += `          bgGradient: ${bgGradientStr} as [string, string],\n`;
    content += `          accentColor: ${JSON.stringify(video.accentColor)},\n`;
    content += `          letters: ${lettersStr},\n`;
    content += `          letterDuration: ${video.letterDuration || 3},\n`;
    content += `          introDuration: ${video.introDuration || 3},\n`;
    content += `          outroDuration: ${video.outroDuration || 3},\n`;
    content += `        }}\n`;
    content += `      />\n`;
  }

  content += `    </>\n`;
  content += `  );\n`;
  content += `};\n`;

  // Write the file
  fs.writeFileSync(ROOT_TSX_PATH, content, "utf-8");

  console.log(`\nFruitRoot.tsx generated successfully!`);
  console.log(`  Compositions: ${videos.length}`);
  console.log(`  Format: 1080x1920 (portrait/shorts)`);
  console.log(`  FPS: ${FPS}`);
  console.log(`  File: ${ROOT_TSX_PATH}`);
  if (fs.existsSync(BACKUP_PATH)) {
    console.log(`  Backup: ${BACKUP_PATH}`);
  }
  console.log("\nDone!");
}

main();
