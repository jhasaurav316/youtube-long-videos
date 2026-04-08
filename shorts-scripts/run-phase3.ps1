# ============================================================================
# ONE-CLICK Phase 3 Render (50 Videos)
# Vegetables (remaining 20) + Flowers (30) = 50 videos
# Usage: cd C:\test\youtube-shorts-bulk && .\run-phase3.ps1
# ============================================================================

$ErrorActionPreference = "Stop"
$ProjectDir = "C:\test\youtube-shorts-bulk"

Write-Host ""
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host "  PHASE 3: 50 Videos (20 Vegetables + 30 Flowers)" -ForegroundColor Cyan
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host ""

Set-Location $ProjectDir
$prevEAP = $ErrorActionPreference; $ErrorActionPreference = "Continue"; git pull; $ErrorActionPreference = $prevEAP
Write-Host "  Repo updated!" -ForegroundColor Green
Write-Host ""

$Voice = "en-IN-NeerjaNeural"
$Rate = "-10%"
$Pitch = "+5Hz"

$catalogs = @(
    @{ Path = "vegetable-names\catalog.json"; Name = "Vegetables (remaining)"; FromIdx = 10; ToIdx = 19 },
    @{ Path = "flower-names\catalog.json"; Name = "Flowers"; FromIdx = 0; ToIdx = 29 }
)

# ======================== AUDIO ========================
Write-Host "  STEP 1: Generating Audio..." -ForegroundColor Yellow
$audioDone = 0
$audioTotal = 50

foreach ($cat in $catalogs) {
    $catPath = Join-Path $ProjectDir $cat.Path
    $json = Get-Content $catPath -Raw | ConvertFrom-Json
    $videos = if ($json -is [System.Array]) { $json } else { $json.videos }
    Write-Host "  --- $($cat.Name) ---" -ForegroundColor Magenta

    for ($vi = $cat.FromIdx; $vi -le $cat.ToIdx; $vi++) {
        $audioDone++
        $video = $videos[$vi]
        $videoId = $video.id
        $audioDir = Join-Path (Join-Path $ProjectDir "public") "$videoId-audio"

        if (Test-Path $audioDir) {
            Write-Host "  [$audioDone/$audioTotal] SKIP: $videoId" -ForegroundColor DarkYellow
            continue
        }

        Write-Host "  [$audioDone/$audioTotal] $videoId" -ForegroundColor Cyan
        New-Item -ItemType Directory -Path $audioDir -Force | Out-Null
        $items = $video.items
        if (-not $items) { $items = $video.letters }

        for ($i = 0; $i -lt $items.Count; $i++) {
            $item = $items[$i]
            $text = "$($item.letter) for $($item.word)"
            $outFile = Join-Path $audioDir "letter_$i.mp3"
            $prevEAP = $ErrorActionPreference; $ErrorActionPreference = "Continue"
            edge-tts --voice $Voice --rate="$Rate" --pitch="$Pitch" --text "$text" --write-media "$outFile" 2>&1 | Out-Null
            $ErrorActionPreference = $prevEAP
        }

        $duration = 3 + $items.Count * 3 + 3
        $bgmFile = Join-Path $audioDir "bgm.mp3"
        $prevEAP = $ErrorActionPreference; $ErrorActionPreference = "Continue"
        $ffmpegCmd = "ffmpeg -y -f lavfi -i `"sine=frequency=523.25:duration=$duration`" -f lavfi -i `"sine=frequency=659.25:duration=$duration`" -f lavfi -i `"sine=frequency=783.99:duration=$duration`" -filter_complex `"[0]volume=0.08,aformat=channel_layouts=mono[c];[1]volume=0.06,aformat=channel_layouts=mono[e];[2]volume=0.04,aformat=channel_layouts=mono[g];[c][e][g]amix=inputs=3:duration=longest,lowpass=f=2000,volume=0.5[out]`" -map `"[out]`" `"$bgmFile`""
        cmd /c $ffmpegCmd 2>&1 | Out-Null
        $ErrorActionPreference = $prevEAP
    }
}
Write-Host "  Audio done!" -ForegroundColor Green
Write-Host ""

# ======================== REGISTER ========================
Write-Host "  STEP 2: Registering..." -ForegroundColor Yellow
node (Join-Path $ProjectDir "vegetable-names\register-compositions.js")
node (Join-Path $ProjectDir "flower-names\register-compositions.js")
Write-Host "  Done!" -ForegroundColor Green
Write-Host ""

# ======================== RENDER ========================
Write-Host "  STEP 3: Rendering 50 Videos..." -ForegroundColor Yellow
$startTime = Get-Date
$rendered = 0; $skipped = 0; $failed = 0; $current = 0; $total = 50

foreach ($cat in $catalogs) {
    $catPath = Join-Path $ProjectDir $cat.Path
    $folder = $cat.Path.Split('\')[0]
    $json = Get-Content $catPath -Raw | ConvertFrom-Json
    $videos = if ($json -is [System.Array]) { $json } else { $json.videos }
    $outDir = Join-Path (Join-Path $ProjectDir "out") $folder
    if (-not (Test-Path $outDir)) { New-Item -ItemType Directory -Path $outDir -Force | Out-Null }

    Write-Host "  --- $($cat.Name) ---" -ForegroundColor Magenta
    for ($vi = $cat.FromIdx; $vi -le $cat.ToIdx; $vi++) {
        $current++
        $video = $videos[$vi]
        $videoId = $video.id
        $compId = ($videoId -split '[-_\s]+' | ForEach-Object { $_.Substring(0,1).ToUpper() + $_.Substring(1).ToLower() }) -join ''
        $outputFile = Join-Path $outDir "$videoId.mp4"

        if (Test-Path $outputFile) {
            $skipped++
            Write-Host "  [$current/$total] SKIP: $videoId" -ForegroundColor DarkYellow
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

$elapsed = (Get-Date) - $startTime
Write-Host ""
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host "  PHASE 2 COMPLETE!" -ForegroundColor Green
Write-Host "  Rendered: $rendered | Skipped: $skipped | Failed: $failed" -ForegroundColor White
Write-Host "  Time: $($elapsed.ToString('hh\:mm\:ss'))" -ForegroundColor White
Write-Host "================================================================" -ForegroundColor Cyan
