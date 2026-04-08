# generate-audio-phase1.ps1
# Generates audio for Phase 1: 30 animal videos + 20 bird videos
# Uses edge-tts with Indian English female voice
# Run: .\generate-audio-phase1.ps1

$Voice = "en-IN-NeerjaNeural"
$Rate = "-10%"
$Pitch = "+5Hz"
$ProjectDir = $PSScriptRoot

$totalVideos = 50
$currentVideo = 0
$startTime = Get-Date

# ---------- Helper Functions ----------

function Convert-ToPascalCase {
    param([string]$str)
    ($str -split '[-_\s]+' | ForEach-Object {
        $_.Substring(0,1).ToUpper() + $_.Substring(1).ToLower()
    }) -join ''
}

function Process-Catalog {
    param(
        [string]$CatalogPath,
        [string]$FolderName
    )

    if (-not (Test-Path $CatalogPath)) {
        Write-Host "ERROR: Catalog not found at $CatalogPath" -ForegroundColor Red
        return
    }

    $catalog = Get-Content $CatalogPath -Raw | ConvertFrom-Json
    $videos = if ($catalog -is [System.Array]) { $catalog } else { $catalog.videos }

    foreach ($video in $videos) {
        $script:currentVideo++
        $videoId = $video.id
        $audioDir = Join-Path $ProjectDir "public" "$videoId-audio"

        # Skip if audio directory already exists (resumability)
        if (Test-Path $audioDir) {
            Write-Host "[$script:currentVideo/$totalVideos] SKIP (exists): $videoId" -ForegroundColor Yellow
            continue
        }

        Write-Host "[$script:currentVideo/$totalVideos] Generating audio for $videoId..." -ForegroundColor Cyan

        # Create audio directory
        New-Item -ItemType Directory -Path $audioDir -Force | Out-Null

        # Generate audio for each item
        $items = $video.items
        for ($i = 0; $i -lt $items.Count; $i++) {
            $item = $items[$i]
            $letter = $item.letter
            $word = $item.word
            $text = "$letter for $word"
            $outputFile = Join-Path $audioDir "letter_$i.mp3"

            Write-Host "  [$($i+1)/$($items.Count)] $text"

            & edge-tts --voice $Voice --rate="$Rate" --pitch="$Pitch" --text "$text" --write-media "$outputFile" 2>$null

            if ($LASTEXITCODE -ne 0) {
                Write-Host "  WARNING: Failed to generate audio for '$text'" -ForegroundColor Yellow
            }
        }

        # Generate BGM using ffmpeg
        $bgmFile = Join-Path $audioDir "bgm.mp3"
        Write-Host "  Generating BGM..."

        & ffmpeg -y -f lavfi -i "sine=frequency=523.25:duration=96" `
            -f lavfi -i "sine=frequency=659.25:duration=96" `
            -f lavfi -i "sine=frequency=783.99:duration=96" `
            -filter_complex "[0]volume=0.08,aformat=channel_layouts=mono[c];[1]volume=0.06,aformat=channel_layouts=mono[e];[2]volume=0.04,aformat=channel_layouts=mono[g];[c][e][g]amix=inputs=3:duration=longest,lowpass=f=2000,volume=0.5[out]" `
            -map "[out]" "$bgmFile" 2>$null

        if ($LASTEXITCODE -ne 0) {
            Write-Host "  WARNING: Failed to generate BGM for $videoId" -ForegroundColor Yellow
        }

        Write-Host "  Done!" -ForegroundColor Green
    }
}

# ---------- Main ----------

Write-Host "============================================" -ForegroundColor White
Write-Host "  Phase 1 Audio Generation" -ForegroundColor White
Write-Host "  30 Animal Videos + 20 Bird Videos = 50 Total" -ForegroundColor White
Write-Host "============================================" -ForegroundColor White
Write-Host ""

# Process animal-names catalog first
Write-Host "--- Processing Animal Names ---" -ForegroundColor Magenta
$animalCatalog = Join-Path $ProjectDir "animal-names" "catalog.json"
Process-Catalog -CatalogPath $animalCatalog -FolderName "animal-names"

Write-Host ""

# Process bird-names catalog second
Write-Host "--- Processing Bird Names ---" -ForegroundColor Magenta
$birdCatalog = Join-Path $ProjectDir "bird-names" "catalog.json"
Process-Catalog -CatalogPath $birdCatalog -FolderName "bird-names"

# ---------- Summary ----------
$endTime = Get-Date
$elapsed = $endTime - $startTime

Write-Host ""
Write-Host "============================================" -ForegroundColor White
Write-Host "  Phase 1 Audio Generation Complete!" -ForegroundColor Green
Write-Host "  Total videos processed: $currentVideo / $totalVideos" -ForegroundColor White
Write-Host "  Elapsed time: $($elapsed.ToString('hh\:mm\:ss'))" -ForegroundColor White
Write-Host "============================================" -ForegroundColor White
