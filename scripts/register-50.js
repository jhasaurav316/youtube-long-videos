#!/usr/bin/env node
// Generates src/Video50Root.tsx from catalog-50.json
// Usage: node scripts/register-50.js

const path = require("path");
const fs = require("fs");

const PROJECT_ROOT = path.resolve(__dirname, "..");
const CATALOG_PATH = path.join(__dirname, "catalog-50.json");
const ROOT_TSX_PATH = path.join(PROJECT_ROOT, "src", "Video50Root.tsx");
const FPS = 30;

function toPascalCase(str) {
  return str.split(/[-_\s]+/).map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join("");
}

function calcDurationInFrames(video) {
  const { itemDuration = 5, chapterIntroDuration = 3, chapterOutroDuration = 3,
    videoIntroDuration = 8, videoOutroDuration = 10, chapterTransitionDuration = 4 } = video;

  let total = videoIntroDuration;
  for (const ch of video.chapters) {
    total += chapterTransitionDuration + chapterIntroDuration +
      (ch.items || []).length * itemDuration + chapterOutroDuration;
  }
  total += videoOutroDuration;
  return Math.round(total * FPS);
}

function main() {
  const catalog = JSON.parse(fs.readFileSync(CATALOG_PATH, "utf-8"));
  console.log(`Registering ${catalog.length} videos...`);

  let content = `import { Composition } from "remotion";\n`;
  content += `import { LandscapeCompilationTemplate } from "./LandscapeCompilationTemplate";\n`;
  content += `import React from "react";\n\n`;
  content += `export const Video50RemotionRoot: React.FC = () => {\n`;
  content += `  return (\n    <>\n`;

  for (const video of catalog) {
    const compId = toPascalCase(video.id);
    const dur = calcDurationInFrames(video);
    const chapStr = JSON.stringify(video.chapters.map((ch) => ({
      themeId: ch.themeId, title: ch.title, bgGradient: ch.bgGradient,
      accentColor: ch.accentColor, items: ch.items,
    })), null, 10).split("\n").map((l, i) => i === 0 ? l : "          " + l.trim()).join("\n");

    content += `      <Composition\n`;
    content += `        id="${compId}"\n`;
    content += `        component={LandscapeCompilationTemplate}\n`;
    content += `        durationInFrames={${dur}}\n`;
    content += `        fps={${FPS}}\n`;
    content += `        width={1920}\n`;
    content += `        height={1080}\n`;
    content += `        defaultProps={{\n`;
    content += `          title: ${JSON.stringify(video.title)},\n`;
    content += `          videoId: ${JSON.stringify(video.id)},\n`;
    content += `          chapters: ${chapStr},\n`;
    content += `          itemDuration: ${video.itemDuration || 5},\n`;
    content += `          chapterIntroDuration: ${video.chapterIntroDuration || 3},\n`;
    content += `          chapterOutroDuration: ${video.chapterOutroDuration || 3},\n`;
    content += `          videoIntroDuration: ${video.videoIntroDuration || 8},\n`;
    content += `          videoOutroDuration: ${video.videoOutroDuration || 10},\n`;
    content += `          chapterTransitionDuration: ${video.chapterTransitionDuration || 4},\n`;
    content += `        }}\n`;
    content += `      />\n`;
  }

  content += `    </>\n  );\n};\n`;
  fs.writeFileSync(ROOT_TSX_PATH, content, "utf-8");
  console.log(`✅ Video50Root.tsx generated (${catalog.length} compositions)`);
}

main();
