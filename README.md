# YouTube Long Videos - 1000 Landscape Compilations

1000 landscape (1920x1080) YouTube videos, 30-40 minutes each (varied lengths), compiled from A-to-Z learning shorts across 15 categories.

## Setup

```bash
npm install
```

## Usage (20 Phases, 50 videos each)

### Step 1: Generate Audio (run before rendering)
```powershell
.\scripts\phase1-audio.ps1    # Videos 1-50
.\scripts\phase2-audio.ps1    # Videos 51-100
# ... up to phase20
```

### Step 2: Render Videos
```powershell
.\scripts\phase1-render.ps1                # Videos 1-50 (HD)
.\scripts\phase1-render.ps1 -Quality max   # Videos 1-50 (Max quality)
# ... up to phase20
```

### Single video
```powershell
.\scripts\render-all-long-videos.ps1 -Single 1
```

### Preview
```bash
npm run dev
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
- **1000 videos** with varied lengths (24-44 min)
- **~557 hours** of total content
- **11-15 chapters** per video (shuffled)
- **4-5.5 sec** per item (varied)
- **15 categories**: Animals, Birds, Fruits, Vegetables, Flowers, Sea Creatures, Insects, Dinosaurs, Instruments, Vehicles, Countries, Sports, Foods, Colors & Shapes, Space

## Requirements
- Node.js 18+
- edge-tts (for voice narration)
- ffmpeg (for BGM generation)
- GPU recommended for faster rendering
