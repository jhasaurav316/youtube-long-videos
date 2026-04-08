/**
 * YouTube Shorts Bulk Uploader
 *
 * Reads catalog.json from specified folders, generates unique titles/descriptions,
 * and uploads videos to YouTube with optional scheduling.
 *
 * Usage:
 *   node upload.js --folders animal-names,bird-names
 *   node upload.js --folders animal-names --schedule "2026-04-10T10:00:00Z" --interval 8
 *   node upload.js --folders animal-names --dry-run
 *   node upload.js --all
 *   node upload.js --all --status unlisted
 */

import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { getAuthClient } from './auth.js';
import { generateMetadata } from './generate-metadata.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_DIR = path.resolve(__dirname, '..');
const UPLOAD_LOG_PATH = path.join(__dirname, 'upload-log.json');

// ─── CLI Args ───────────────────────────────────────────────────────
function parseArgs() {
  const args = process.argv.slice(2);
  const parsed = {
    folders: [],
    all: false,
    dryRun: false,
    status: 'public',        // public | unlisted | private
    schedule: null,           // ISO date string for first video
    interval: 8,              // hours between scheduled uploads
    from: 1,                  // start from video N (1-based)
    to: 0,                    // end at video N (0 = all)
    skipUploaded: true,       // skip already uploaded videos
  };

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--folders':
        parsed.folders = args[++i].split(',').map(f => f.trim());
        break;
      case '--all':
        parsed.all = true;
        break;
      case '--dry-run':
        parsed.dryRun = true;
        break;
      case '--status':
        parsed.status = args[++i];
        break;
      case '--schedule':
        parsed.schedule = args[++i];
        break;
      case '--interval':
        parsed.interval = parseFloat(args[++i]);
        break;
      case '--from':
        parsed.from = parseInt(args[++i]);
        break;
      case '--to':
        parsed.to = parseInt(args[++i]);
        break;
      case '--force':
        parsed.skipUploaded = false;
        break;
      case '--help':
        printHelp();
        process.exit(0);
      default:
        console.error(`Unknown option: ${args[i]}`);
        printHelp();
        process.exit(1);
    }
  }

  return parsed;
}

function printHelp() {
  console.log(`
YouTube Shorts Bulk Uploader
============================

Usage:
  node upload.js [options]

Options:
  --folders <list>     Comma-separated folder names (e.g. animal-names,bird-names)
  --all                Upload from all category folders
  --dry-run            Preview titles/descriptions without uploading
  --status <status>    Upload status: public, unlisted, private (default: public)
  --schedule <date>    Schedule first upload at ISO date (e.g. 2026-04-10T10:00:00Z)
  --interval <hours>   Hours between scheduled uploads (default: 8)
  --from <n>           Start from video N (1-based, default: 1)
  --to <n>             End at video N (default: all)
  --force              Re-upload already uploaded videos

Examples:
  node upload.js --folders animal-names --dry-run
  node upload.js --folders animal-names,bird-names --status unlisted
  node upload.js --all --schedule "2026-04-10T10:00:00Z" --interval 6
  node upload.js --folders fruit-names --from 5 --to 10
`);
}

// ─── Upload Log ─────────────────────────────────────────────────────
function loadUploadLog() {
  if (fs.existsSync(UPLOAD_LOG_PATH)) {
    return JSON.parse(fs.readFileSync(UPLOAD_LOG_PATH, 'utf-8'));
  }
  return { uploaded: {} };
}

function saveUploadLog(log) {
  fs.writeFileSync(UPLOAD_LOG_PATH, JSON.stringify(log, null, 2));
}

// ─── Discover folders ───────────────────────────────────────────────
function getAllCategoryFolders() {
  return fs.readdirSync(PROJECT_DIR)
    .filter(f => {
      const fullPath = path.join(PROJECT_DIR, f);
      return fs.statSync(fullPath).isDirectory()
        && fs.existsSync(path.join(fullPath, 'catalog.json'));
    })
    .sort();
}

// ─── Load videos from folders ───────────────────────────────────────
function loadVideos(folders) {
  const videos = [];

  for (const folder of folders) {
    const catalogPath = path.join(PROJECT_DIR, folder, 'catalog.json');
    if (!fs.existsSync(catalogPath)) {
      console.warn(`⚠️  No catalog.json in ${folder}, skipping.`);
      continue;
    }

    const catalog = JSON.parse(fs.readFileSync(catalogPath, 'utf-8'));
    const entries = Array.isArray(catalog) ? catalog : catalog.videos || [];

    entries.forEach((entry, index) => {
      const videoFile = path.join(PROJECT_DIR, 'out', folder, `${entry.id}.mp4`);
      videos.push({
        folder,
        entry,
        index,
        videoFile,
        exists: fs.existsSync(videoFile),
      });
    });
  }

  return videos;
}

// ─── Upload a single video ──────────────────────────────────────────
async function uploadVideo(youtube, video, metadata, options) {
  const { title, description, tags, categoryId } = metadata;

  const requestBody = {
    snippet: {
      title,
      description,
      tags,
      categoryId,
      defaultLanguage: 'en',
      defaultAudioLanguage: 'en',
    },
    status: {
      privacyStatus: options.publishAt ? 'private' : options.status,
      selfDeclaredMadeForKids: true,
      ...(options.publishAt && { publishAt: options.publishAt }),
    },
  };

  const media = {
    body: fs.createReadStream(video.videoFile),
  };

  const res = await youtube.videos.insert({
    part: 'snippet,status',
    requestBody,
    media,
  });

  return res.data;
}

// ─── Main ───────────────────────────────────────────────────────────
async function main() {
  const opts = parseArgs();

  // Determine folders
  let folders = opts.folders;
  if (opts.all) {
    folders = getAllCategoryFolders();
  }

  if (folders.length === 0) {
    console.error('❌ No folders specified. Use --folders or --all');
    printHelp();
    process.exit(1);
  }

  console.log('\n════════════════════════════════════════════════════');
  console.log('  YouTube Shorts Bulk Uploader');
  console.log('════════════════════════════════════════════════════\n');
  console.log(`  Folders:  ${folders.join(', ')}`);
  console.log(`  Mode:     ${opts.dryRun ? 'DRY RUN (preview only)' : 'UPLOAD'}`);
  console.log(`  Status:   ${opts.schedule ? 'scheduled' : opts.status}`);
  if (opts.schedule) {
    console.log(`  Start:    ${opts.schedule}`);
    console.log(`  Interval: ${opts.interval} hours`);
  }
  console.log('');

  // Load all videos
  const allVideos = loadVideos(folders);
  const uploadLog = loadUploadLog();

  // Apply from/to range
  const to = opts.to > 0 ? opts.to : allVideos.length;
  const selectedVideos = allVideos.slice(opts.from - 1, to);

  // Filter out already uploaded
  const videosToUpload = opts.skipUploaded
    ? selectedVideos.filter(v => !uploadLog.uploaded[v.entry.id])
    : selectedVideos;

  // Check which videos have mp4 files
  const missingFiles = videosToUpload.filter(v => !v.exists);
  const readyVideos = videosToUpload.filter(v => v.exists);

  if (missingFiles.length > 0) {
    console.log(`⚠️  ${missingFiles.length} video(s) not yet rendered (no mp4):`);
    missingFiles.slice(0, 5).forEach(v => console.log(`   - ${v.entry.id}`));
    if (missingFiles.length > 5) console.log(`   ... and ${missingFiles.length - 5} more`);
    console.log('');
  }

  if (readyVideos.length === 0) {
    console.log('ℹ️  No videos to upload. Either all uploaded or none rendered.');
    return;
  }

  console.log(`📹 ${readyVideos.length} video(s) ready for upload:\n`);

  // Generate metadata and preview
  const uploadPlan = readyVideos.map((video, i) => {
    const metadata = generateMetadata(video.entry, video.folder, video.index);

    // Calculate schedule time
    let publishAt = null;
    if (opts.schedule) {
      const startDate = new Date(opts.schedule);
      publishAt = new Date(startDate.getTime() + i * opts.interval * 60 * 60 * 1000).toISOString();
    }

    return { video, metadata, publishAt };
  });

  // Print preview
  uploadPlan.forEach(({ video, metadata, publishAt }, i) => {
    console.log(`  ${i + 1}. [${video.folder}] ${video.entry.id}`);
    console.log(`     Title: ${metadata.title}`);
    if (publishAt) console.log(`     Scheduled: ${new Date(publishAt).toLocaleString()}`);
    console.log('');
  });

  if (opts.dryRun) {
    console.log('────────────────────────────────────────────────');
    console.log('  DRY RUN complete. No videos were uploaded.');
    console.log('  Remove --dry-run to upload for real.');
    console.log('────────────────────────────────────────────────\n');

    // Also write a preview file
    const previewPath = path.join(__dirname, 'upload-preview.json');
    const preview = uploadPlan.map(({ video, metadata, publishAt }) => ({
      id: video.entry.id,
      folder: video.folder,
      file: video.videoFile,
      title: metadata.title,
      description: metadata.description,
      tags: metadata.tags,
      publishAt,
    }));
    fs.writeFileSync(previewPath, JSON.stringify(preview, null, 2));
    console.log(`  Preview saved to upload-preview.json\n`);
    return;
  }

  // Authenticate
  console.log('🔑 Authenticating with YouTube...\n');
  const auth = await getAuthClient();
  const youtube = google.youtube({ version: 'v3', auth });

  // Upload videos
  let successCount = 0;
  let failCount = 0;

  for (const [i, { video, metadata, publishAt }] of uploadPlan.entries()) {
    const num = `[${i + 1}/${uploadPlan.length}]`;

    try {
      console.log(`📤 ${num} Uploading: ${metadata.title}`);

      const result = await uploadVideo(youtube, video, metadata, {
        status: opts.status,
        publishAt,
      });

      uploadLog.uploaded[video.entry.id] = {
        youtubeId: result.id,
        title: metadata.title,
        publishAt,
        uploadedAt: new Date().toISOString(),
        folder: video.folder,
      };
      saveUploadLog(uploadLog);

      console.log(`   ✅ Uploaded: https://youtube.com/shorts/${result.id}`);
      successCount++;

      // Small delay between uploads to avoid rate limiting
      if (i < uploadPlan.length - 1) {
        await new Promise(r => setTimeout(r, 3000));
      }
    } catch (err) {
      console.error(`   ❌ Failed: ${err.message}`);
      if (err.errors) {
        err.errors.forEach(e => console.error(`      - ${e.reason}: ${e.message}`));
      }
      failCount++;

      // If quota exceeded, stop
      if (err.code === 403 && err.message.includes('quota')) {
        console.error('\n🚫 YouTube API quota exceeded. Try again tomorrow.');
        break;
      }
    }
  }

  console.log('\n════════════════════════════════════════════════════');
  console.log(`  Upload Complete: ${successCount} success, ${failCount} failed`);
  console.log('════════════════════════════════════════════════════\n');
}

main().catch(console.error);
