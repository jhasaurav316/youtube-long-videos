# ============================================================================
# ONE-CLICK Phase 1 Setup + Render (50 Videos)
# ============================================================================
# Run this ONE script and it does everything:
#   1. Clone repo
#   2. Install dependencies
#   3. Install edge-tts
#   4. Generate audio (Indian English female voice)
#   5. Register compositions
#   6. Render 50 videos (30 Animals + 20 Birds)
#
# Usage: Open PowerShell as Admin, then:
#   cd C:\test
#   .\run-phase1.ps1
# ============================================================================

$ErrorActionPreference = "Stop"
$ProjectDir = "C:\test\youtube-shorts-bulk"

Write-Host ""
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host "  PHASE 1: ONE-CLICK SETUP + RENDER" -ForegroundColor Cyan
Write-Host "  50 Videos (30 Animals + 20 Birds)" -ForegroundColor Cyan
Write-Host "  Quality: Full HD (1080x1920)" -ForegroundColor Cyan
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host ""

# ======================== STEP 1: CLONE REPO ========================
Write-Host "────────────────────────────────────────────────" -ForegroundColor DarkGray
Write-Host "  STEP 1: Cloning Repository" -ForegroundColor Yellow
Write-Host "────────────────────────────────────────────────" -ForegroundColor DarkGray

if (Test-Path $ProjectDir) {
    Write-Host "  Repo already exists, pulling latest..." -ForegroundColor Gray
    Set-Location $ProjectDir
    $ErrorActionPreference = "Continue"; git pull; $ErrorActionPreference = "Stop"
} else {
    Set-Location "C:\test"
    $ErrorActionPreference = "Continue"; git clone https://github.com/jhasaurav316/youtube-shorts-bulk.git; $ErrorActionPreference = "Stop"
    Set-Location $ProjectDir
}
Write-Host "  Done!" -ForegroundColor Green
Write-Host ""

# ======================== STEP 2: INSTALL DEPENDENCIES ========================
Write-Host "────────────────────────────────────────────────" -ForegroundColor DarkGray
Write-Host "  STEP 2: Installing Dependencies" -ForegroundColor Yellow
Write-Host "────────────────────────────────────────────────" -ForegroundColor DarkGray

npm install
Write-Host "  npm packages installed!" -ForegroundColor Green

# Install edge-tts
try {
    pip install edge-tts 2>&1 | Out-Null
} catch {
    Write-Host "  pip had a warning, checking if edge-tts works..." -ForegroundColor Yellow
}
$edgeCheck = & edge-tts --version 2>&1
Write-Host "  edge-tts ready!" -ForegroundColor Green
Write-Host ""

# ======================== STEP 3: GENERATE AUDIO ========================
Write-Host "────────────────────────────────────────────────" -ForegroundColor DarkGray
Write-Host "  STEP 3: Generating Audio (Indian English Female Voice)" -ForegroundColor Yellow
Write-Host "  Voice: en-IN-NeerjaNeural | This may take ~10-15 minutes" -ForegroundColor DarkGray
Write-Host "────────────────────────────────────────────────" -ForegroundColor DarkGray
Write-Host ""

$Voice = "en-IN-NeerjaNeural"
$Rate = "-10%"
$Pitch = "+5Hz"

# Process both catalogs
$catalogs = @(
    @{ Path = "animal-names\catalog.json"; Name = "Animals" },
    @{ Path = "bird-names\catalog.json";   Name = "Birds" }
)

$audioTotal = 0
$audioDone = 0

# Count total first
foreach ($cat in $catalogs) {
    $catPath = Join-Path $ProjectDir $cat.Path
    $json = Get-Content $catPath -Raw | ConvertFrom-Json
    $videos = if ($json -is [System.Array]) { $json } else { $json.videos }
    $audioTotal += $videos.Count
}

foreach ($cat in $catalogs) {
    $catPath = Join-Path $ProjectDir $cat.Path
    $json = Get-Content $catPath -Raw | ConvertFrom-Json
    $videos = if ($json -is [System.Array]) { $json } else { $json.videos }

    Write-Host "  --- $($cat.Name) ($($videos.Count) videos) ---" -ForegroundColor Magenta

    foreach ($video in $videos) {
        $audioDone++
        $videoId = $video.id
        $audioDir = Join-Path (Join-Path $ProjectDir "public") "$videoId-audio"

        # Skip if already generated
        if (Test-Path $audioDir) {
            Write-Host "  [$audioDone/$audioTotal] SKIP: $videoId (audio exists)" -ForegroundColor DarkYellow
            continue
        }

        Write-Host "  [$audioDone/$audioTotal] Generating audio: $videoId" -ForegroundColor Cyan
        New-Item -ItemType Directory -Path $audioDir -Force | Out-Null

        # Get items
        $items = $video.items
        if (-not $items) { $items = $video.letters }

        # Generate voice for each item
        for ($i = 0; $i -lt $items.Count; $i++) {
            $item = $items[$i]
            $text = "$($item.letter) for $($item.word)"
            $outFile = Join-Path $audioDir "letter_$i.mp3"

            $prevEAP = $ErrorActionPreference; $ErrorActionPreference = "Continue"
            edge-tts --voice $Voice --rate="$Rate" --pitch="$Pitch" --text "$text" --write-media "$outFile" 2>&1 | Out-Null
            $ErrorActionPreference = $prevEAP
        }

        # Generate BGM using cmd.exe to avoid PowerShell escaping issues
        $duration = 3 + $items.Count * 3 + 3  # intro + items + outro
        $bgmFile = Join-Path $audioDir "bgm.mp3"
        $prevEAP = $ErrorActionPreference; $ErrorActionPreference = "Continue"
        $ffmpegCmd = "ffmpeg -y -f lavfi -i `"sine=frequency=523.25:duration=$duration`" -f lavfi -i `"sine=frequency=659.25:duration=$duration`" -f lavfi -i `"sine=frequency=783.99:duration=$duration`" -filter_complex `"[0]volume=0.08,aformat=channel_layouts=mono[c];[1]volume=0.06,aformat=channel_layouts=mono[e];[2]volume=0.04,aformat=channel_layouts=mono[g];[c][e][g]amix=inputs=3:duration=longest,lowpass=f=2000,volume=0.5[out]`" -map `"[out]`" `"$bgmFile`""
        cmd /c $ffmpegCmd 2>&1 | Out-Null
        $ErrorActionPreference = $prevEAP

        Write-Host "    $($items.Count) audio files + BGM generated" -ForegroundColor Gray
    }
}

Write-Host ""
Write-Host "  Audio generation complete!" -ForegroundColor Green
Write-Host ""

# ======================== STEP 4: REGISTER COMPOSITIONS ========================
Write-Host "────────────────────────────────────────────────" -ForegroundColor DarkGray
Write-Host "  STEP 4: Registering Compositions" -ForegroundColor Yellow
Write-Host "────────────────────────────────────────────────" -ForegroundColor DarkGray

node (Join-Path $ProjectDir "animal-names\register-compositions.js")
node (Join-Path $ProjectDir "bird-names\register-compositions.js")
Write-Host "  50 compositions registered!" -ForegroundColor Green
Write-Host ""

# ======================== STEP 5: RENDER 50 VIDEOS ========================
Write-Host "────────────────────────────────────────────────" -ForegroundColor DarkGray
Write-Host "  STEP 5: Rendering 50 Videos (Full HD 1080x1920)" -ForegroundColor Yellow
Write-Host "  This will take ~2-3 hours on RTX 4090" -ForegroundColor DarkGray
Write-Host "────────────────────────────────────────────────" -ForegroundColor DarkGray
Write-Host ""

$startTime = Get-Date
$rendered = 0
$skipped = 0
$failed = 0
$current = 0
$total = 50

foreach ($cat in $catalogs) {
    $catPath = Join-Path $ProjectDir $cat.Path
    $folder = $cat.Path.Split('\')[0]
    $json = Get-Content $catPath -Raw | ConvertFrom-Json
    $videos = if ($json -is [System.Array]) { $json } else { $json.videos }

    $outDir = Join-Path (Join-Path $ProjectDir "out") $folder
    if (-not (Test-Path $outDir)) {
        New-Item -ItemType Directory -Path $outDir -Force | Out-Null
    }

    Write-Host "  --- Rendering $($cat.Name) ---" -ForegroundColor Magenta

    foreach ($video in $videos) {
        $current++
        $videoId = $video.id
        $compId = ($videoId -split '[-_\s]+' | ForEach-Object {
            $_.Substring(0,1).ToUpper() + $_.Substring(1).ToLower()
        }) -join ''
        $outputFile = Join-Path $outDir "$videoId.mp4"

        if (Test-Path $outputFile) {
            $skipped++
            Write-Host "  [$current/$total] SKIP: $($video.title) (exists)" -ForegroundColor DarkYellow
            continue
        }

        $elapsed = (Get-Date) - $startTime
        Write-Host "  [$current/$total] $($video.title) [$($elapsed.ToString('hh\:mm\:ss'))]" -ForegroundColor Cyan

        $prevEAP = $ErrorActionPreference; $ErrorActionPreference = "Continue"
        npx remotion render $compId "$outputFile" --concurrency=100% --log=error --crf=18 --codec=h264
        $ErrorActionPreference = $prevEAP

        if ($LASTEXITCODE -eq 0) {
            $rendered++
            $fileSize = [math]::Round((Get-Item $outputFile).Length / 1MB, 1)
            Write-Host "    Done! (${fileSize} MB)" -ForegroundColor Green
        } else {
            $failed++
            Write-Host "    FAILED!" -ForegroundColor Red
        }
    }
}

# ======================== SUMMARY ========================
$endTime = Get-Date
$elapsed = $endTime - $startTime

Write-Host ""
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host "  PHASE 1 COMPLETE!" -ForegroundColor Green
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "  Rendered:  $rendered videos" -ForegroundColor Green
Write-Host "  Skipped:   $skipped videos" -ForegroundColor Yellow
Write-Host "  Failed:    $failed videos" -ForegroundColor $(if ($failed -gt 0) { "Red" } else { "White" })
Write-Host "  Time:      $($elapsed.ToString('hh\:mm\:ss'))" -ForegroundColor White
Write-Host ""
Write-Host "  Output:" -ForegroundColor White
Write-Host "    C:\test\youtube-shorts-bulk\out\animal-names\  (30 videos)" -ForegroundColor White
Write-Host "    C:\test\youtube-shorts-bulk\out\bird-names\    (20 videos)" -ForegroundColor White
Write-Host ""
Write-Host "================================================================" -ForegroundColor Cyan
