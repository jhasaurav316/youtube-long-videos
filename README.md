# YouTube Long Videos - 500 Landscape Compilations

500 landscape (1920x1080) YouTube videos, each ~14 minutes, compiled from A-to-Z learning shorts data across 15 categories.

## Setup

```bash
npm install
```

## Usage (10 Phases, 50 videos each)

### Step 1: Generate Audio (run before rendering)
```powershell
.\scripts\phase1-audio.ps1    # Videos 1-50
.\scripts\phase2-audio.ps1    # Videos 51-100
# ... up to phase10
```

### Step 2: Render Videos
```powershell
.\scripts\phase1-render.ps1                # Videos 1-50 (HD)
.\scripts\phase1-render.ps1 -Quality max   # Videos 1-50 (Max quality)
# ... up to phase10
```

### Render a single video
```powershell
.\scripts\render-all-long-videos.ps1 -Single 1
```

### Preview in Remotion Studio
```bash
npm run dev
```

## Phase Breakdown

| Phase | Videos | Count |
|-------|--------|-------|
| 1 | 1-50 | 50 |
| 2 | 51-100 | 50 |
| 3 | 101-150 | 50 |
| 4 | 151-200 | 50 |
| 5 | 201-250 | 50 |
| 6 | 251-300 | 50 |
| 7 | 301-350 | 50 |
| 8 | 351-400 | 50 |
| 9 | 401-450 | 50 |
| 10 | 451-500 | 50 |

## Video Types
- **88 category compilations** (same category, 5 chapters)
- **162 pair-category mixes** (2 categories combined)
- **150 triple-category mixes** (3 categories combined)
- **100 random cross-category mixes**

## Requirements
- Node.js 18+
- edge-tts (for voice narration)
- ffmpeg (for BGM generation)
- GPU recommended for faster rendering
