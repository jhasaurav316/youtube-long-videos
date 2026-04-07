# ============================================================================
# Long Video Audio Generator - All 100 Videos
# ============================================================================
# Generates narration (edge-tts) + BGM (ffmpeg) for all long video chapters
#
# Usage:
#   .\long-video\generate-all-audio.ps1                  # All videos
#   .\long-video\generate-all-audio.ps1 -From 1 -To 10  # Videos 1-10 only
#   .\long-video\generate-all-audio.ps1 -Single 5        # Video 5 only
# ============================================================================

param(
    [int]$From = 1,
    [int]$To = 0,
    [int]$Single = 0
)

$ErrorActionPreference = "Stop"
$ProjectDir = Split-Path -Parent $PSScriptRoot
if (Test-Path (Join-Path $PSScriptRoot "catalog.json")) {
    $ProjectDir = Split-Path -Parent $PSScriptRoot
}
$CatalogPath = Join-Path $PSScriptRoot "catalog.json"
$PublicDir = Join-Path $ProjectDir "public"
$LogFile = Join-Path $PSScriptRoot "audio-gen-log.txt"

$Voice = "en-IN-NeerjaNeural"
$Rate = "-10%"
$Pitch = "+5Hz"

# ---------- Load Catalog ----------
if (-not (Test-Path $CatalogPath)) {
    Write-Host "ERROR: catalog.json not found. Run generate-catalog.js first." -ForegroundColor Red
    exit 1
}

$catalog = Get-Content $CatalogPath -Raw | ConvertFrom-Json
$Total = $catalog.Count

if ($Single -gt 0) { $From = $Single; $To = $Single }
if ($To -eq 0 -or $To -gt $Total) { $To = $Total }

# ---------- Header ----------
Write-Host ""
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host "  LONG VIDEO AUDIO GENERATOR" -ForegroundColor Cyan
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "  Videos:    $Total total, generating $From to $To" -ForegroundColor White
Write-Host "  Voice:     $Voice" -ForegroundColor White
Write-Host "  Output:    public/<themeId>-audio/" -ForegroundColor White
Write-Host ""

@(
    "================================================================"
    "  Long Video Audio Generation Log"
    "  Started: $(Get-Date)"
    "  Range: $From to $To"
    "================================================================"
    ""
) | Set-Content $LogFile

$startTime = Get-Date
$totalAudioFiles = 0
$skippedFiles = 0

# ---------- Helper ----------
function Generate-TTS {
    param([string]$Text, [string]$OutputFile)

    if (Test-Path $OutputFile) {
        $size = (Get-Item $OutputFile).Length
        if ($size -gt 500) {
            $script:skippedFiles++
            return
        }
    }

    & edge-tts --voice $Voice --rate="$Rate" --pitch="$Pitch" --text "$Text" --write-media "$OutputFile" 2>$null
    $script:totalAudioFiles++
}

function Generate-BGM {
    param([string]$OutputFile, [int]$Duration = 830)

    if (Test-Path $OutputFile) {
        $size = (Get-Item $OutputFile).Length
        if ($size -gt 1000) {
            $script:skippedFiles++
            return
        }
    }

    & ffmpeg -y -f lavfi -i "sine=frequency=523.25:duration=$Duration" `
        -f lavfi -i "sine=frequency=659.25:duration=$Duration" `
        -f lavfi -i "sine=frequency=783.99:duration=$Duration" `
        -filter_complex "[0]volume=0.08,aformat=channel_layouts=mono[c];[1]volume=0.06,aformat=channel_layouts=mono[e];[2]volume=0.04,aformat=channel_layouts=mono[g];[c][e][g]amix=inputs=3:duration=longest,lowpass=f=2000,volume=0.5[out]" `
        -map "[out]" "$OutputFile" 2>$null

    $script:totalAudioFiles++
}

# ---------- Main Loop ----------
for ($idx = $From - 1; $idx -lt $To; $idx++) {
    $video = $catalog[$idx]
    $videoId = $video.id
    $num = $idx + 1

    Write-Host "────────────────────────────────────────────────" -ForegroundColor DarkGray
    Write-Host "  [$num/$To] $($video.title)" -ForegroundColor Yellow

    # Video-level audio directory
    $videoAudioDir = Join-Path $PublicDir "$videoId-audio"
    if (-not (Test-Path $videoAudioDir)) {
        New-Item -ItemType Directory -Path $videoAudioDir -Force | Out-Null
    }

    # Video intro narration
    Write-Host "    Video Intro..." -ForegroundColor Gray
    Generate-TTS "Welcome! $($video.title). Let us learn A to Z!" (Join-Path $videoAudioDir "video-intro.mp3")

    # Video outro narration
    Write-Host "    Video Outro..." -ForegroundColor Gray
    Generate-TTS "Amazing Learning! You did a great job! Like and Subscribe for more fun videos!" (Join-Path $videoAudioDir "video-outro.mp3")

    # Process each chapter
    for ($ci = 0; $ci -lt $video.chapters.Count; $ci++) {
        $ch = $video.chapters[$ci]
        $chNum = $ci + 1
        $chDir = Join-Path $PublicDir "$($ch.themeId)-audio"

        if (-not (Test-Path $chDir)) {
            New-Item -ItemType Directory -Path $chDir -Force | Out-Null
        }

        Write-Host "    Chapter $chNum: $($ch.title) ($($ch.items.Count) items)" -ForegroundColor Cyan

        # Chapter transition narration
        Generate-TTS "Chapter $chNum. $($ch.title)" (Join-Path $chDir "chapter-transition.mp3")

        # Chapter intro narration
        Generate-TTS "$($ch.title). Let us learn!" (Join-Path $chDir "chapter-intro.mp3")

        # Chapter outro narration
        Generate-TTS "Great Job! A to Z Complete!" (Join-Path $chDir "chapter-outro.mp3")

        # Letter audio for each item
        for ($i = 0; $i -lt $ch.items.Count; $i++) {
            $item = $ch.items[$i]
            $text = "$($item.letter) for $($item.word)"
            Generate-TTS $text (Join-Path $chDir "letter_$i.mp3")
        }

        # BGM
        Generate-BGM (Join-Path $chDir "bgm.mp3")
    }

    $elapsed = [math]::Round(((Get-Date) - $startTime).TotalMinutes, 1)
    Write-Host "    ✅ Done ($totalAudioFiles generated, $skippedFiles skipped, $elapsed min elapsed)" -ForegroundColor Green
    "[$num] $videoId - $totalAudioFiles generated, $skippedFiles skipped" | Add-Content $LogFile
}

# ---------- Summary ----------
$totalTime = [math]::Round(((Get-Date) - $startTime).TotalMinutes, 1)

Write-Host ""
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host "  AUDIO GENERATION COMPLETE" -ForegroundColor Cyan
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host "  Generated:  $totalAudioFiles audio files" -ForegroundColor Green
Write-Host "  Skipped:    $skippedFiles (already existed)" -ForegroundColor DarkCyan
Write-Host "  Time:       $totalTime minutes" -ForegroundColor White
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host ""

@(
    ""
    "================================================================"
    "  Completed: $(Get-Date)"
    "  Generated: $totalAudioFiles | Skipped: $skippedFiles"
    "  Total time: $totalTime minutes"
    "================================================================"
) | Add-Content $LogFile
