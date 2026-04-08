# YouTube Video Factory - 1440+ Videos

All-in-one project for generating YouTube Shorts (440) + Long Videos (1000) with automated upload.

## Setup

```bash
npm install
cd youtube-uploader && npm install && cd ..
```

## Project Structure

```
├── src/
│   ├── index.ts                          # Combined root (1440+ compositions)
│   ├── AlphabetShortsTemplate.tsx        # Shorts template (1080x1920)
│   ├── LandscapeCompilationTemplate.tsx  # Long video template (1920x1080)
│   ├── LongVideoRoot.tsx                 # 1000 long video compositions
│   ├── AnimalRoot.tsx                    # Shorts compositions (per category)
│   ├── BirdRoot.tsx
│   └── ... (15 category roots)
│
├── animal-names/                         # Category data (catalog.json per folder)
├── bird-names/
├── ... (15 category folders)
│
├── scripts/                              # Long video scripts (1000 videos)
│   ├── phase1-audio.ps1 ... phase20-audio.ps1
│   ├── phase1-render.ps1 ... phase20-render.ps1
│   ├── render-parallel-3gpu.ps1          # 3x RTX 4090 parallel render
│   ├── render-all-long-videos.ps1        # GPU-accelerated render
│   ├── generate-all-audio.ps1
│   ├── generate-catalog.js
│   ├── register-compositions.js
│   └── catalog.json                      # 1000 video definitions
│
├── shorts-scripts/                       # Shorts render scripts (440 videos)
│   ├── render-phase1.ps1
│   ├── run-phase1.ps1 ... run-phase9.ps1
│   └── generate-audio-phase1.ps1
│
└── youtube-uploader/                     # Auto-upload to YouTube
    ├── auth.js
    ├── upload.js
    └── generate-metadata.js
```

## Long Videos (1000 videos, 30-40 min each)

### 3-GPU Parallel Render (fastest)
```powershell
.\scripts\phase1-audio.ps1
.\scripts\phase1-render.ps1 -Parallel     # Uses all 3 GPUs
```

### Single GPU
```powershell
.\scripts\phase1-render.ps1               # HD quality
.\scripts\phase1-render.ps1 -Quality max  # Max quality
```

### All 1000 at once (3 GPUs)
```powershell
.\scripts\render-parallel-3gpu.ps1
```

## Shorts (440 videos)

```powershell
.\shorts-scripts\run-phase1.ps1    # Phase 1-9
```

## YouTube Upload

```bash
cd youtube-uploader
node auth.js                                            # One-time auth
node upload.js --all --dry-run                          # Preview
node upload.js --folders animal-names --status public   # Upload
```

## 20 Phases (Long Videos)

| Phase | Videos | Phase | Videos |
|-------|--------|-------|--------|
| 1 | 1-50 | 11 | 501-550 |
| 2 | 51-100 | 12 | 551-600 |
| 3 | 101-150 | 13 | 601-650 |
| 4 | 151-200 | 14 | 651-700 |
| 5 | 201-250 | 15 | 701-750 |
| 6 | 251-300 | 16 | 751-800 |
| 7 | 301-350 | 17 | 801-850 |
| 8 | 351-400 | 18 | 851-900 |
| 9 | 401-450 | 19 | 901-950 |
| 10 | 451-500 | 20 | 951-1000 |

## Stats
- **1440+ total videos** (440 shorts + 1000 long)
- **~557 hours** of long video content
- **30-40 min** per long video (shuffled lengths)
- **15 categories**: Animals, Birds, Fruits, Vegetables, Flowers, Sea Creatures, Insects, Dinosaurs, Instruments, Vehicles, Countries, Sports, Foods, Colors & Shapes, Space

## Requirements
- Node.js 18+
- edge-tts
- ffmpeg
- 3x RTX 4090 (recommended)
