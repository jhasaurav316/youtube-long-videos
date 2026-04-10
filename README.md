# YouTube Video Factory - 1440+ Videos

Shorts (440) + Long Videos (1000) + Auto YouTube Upload. All in one.

## Setup

```bash
npm install
```

## Long Videos (1000 videos, 30-40 min each)

### Render phase by phase (50 videos per phase)
```powershell
.\scripts\phase1-audio.ps1       # Generate audio
.\scripts\phase1-render.ps1      # Render videos (HD)
.\scripts\phase1-render.ps1 -Quality max   # Max quality
```

### Render custom range
```powershell
.\scripts\render-all-long-videos.ps1 -From 1 -To 10
.\scripts\render-all-long-videos.ps1 -Single 1
```

### Preview in browser
```bash
npm run dev
```

## Shorts (440 videos)

```powershell
.\shorts-scripts\run-phase1.ps1   # through phase 9
```

## YouTube Upload

```bash
cd youtube-uploader && npm install
node auth.js                                            # One-time setup
node upload.js --all --dry-run                          # Preview
node upload.js --folders animal-names --status public   # Upload
```

## 20 Phases

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
- **1440+ videos** (440 shorts + 1000 long)
- **~557 hours** of content
- **30-40 min** per long video (varied)
- **15 categories**: Animals, Birds, Fruits, Vegetables, Flowers, Sea Creatures, Insects, Dinosaurs, Instruments, Vehicles, Countries, Sports, Foods, Colors & Shapes, Space

## Requirements
- Node.js 18+
- edge-tts (`pip install edge-tts`)
- ffmpeg
