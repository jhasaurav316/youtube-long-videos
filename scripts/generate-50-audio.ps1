# ============================================================================
# Generate Audio for 50 Videos (needs internet for edge-tts)
# ============================================================================
# Run this ONCE before rendering. After this, rendering is fully offline.
#
# Usage:
#   .\scripts\generate-50-audio.ps1                  # All 50
#   .\scripts\generate-50-audio.ps1 -From 1 -To 10  # Videos 1-10
#   .\scripts\generate-50-audio.ps1 -Single 1        # Video 1 only
# ============================================================================

param(
    [int]$From = 1,
    [int]$To = 0,
    [int]$Single = 0
)

$ErrorActionPreference = "Stop"
$ProjectDir = Split-Path -Parent $PSScriptRoot
$CatalogPath = Join-Path $PSScriptRoot "catalog-50.json"
$PublicDir = Join-Path $ProjectDir "public"
$LogFile = Join-Path $PSScriptRoot "audio-50-log.txt"

$Voice = "en-IN-NeerjaNeural"
$Rate = "-10%"
$Pitch = "+5Hz"

if (-not (Test-Path $CatalogPath)) {
    Write-Host "ERROR: catalog-50.json not found." -ForegroundColor Red
    exit 1
}

$catalog = Get-Content $CatalogPath -Raw | ConvertFrom-Json
$Total = $catalog.Count

if ($Single -gt 0) { $From = $Single; $To = $Single }
if ($To -eq 0 -or $To -gt $Total) { $To = $Total }

Write-Host ""
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host "  AUDIO GENERATOR - 50 Videos" -ForegroundColor Cyan
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "  Videos:  $Total total, generating $From to $To" -ForegroundColor White
Write-Host "  Voice:   $Voice" -ForegroundColor White
Write-Host ""

@("  Audio Generation Log", "  Started: $(Get-Date)", "") | Set-Content $LogFile

$startTime = Get-Date
$generated = 0
$skipped = 0
$doneThemes = @{}

function Generate-TTS {
    param([string]$Text, [string]$OutputFile)
    if (Test-Path $OutputFile) {
        $size = (Get-Item $OutputFile).Length
        if ($size -gt 500) {
            $script:skipped++
            return
        }
    }
    & edge-tts --voice $Voice --rate="$Rate" --pitch="$Pitch" --text "$Text" --write-media "$OutputFile" 2>$null
    $script:generated++
}

function Generate-BGM {
    param([string]$OutputFile)
    if (Test-Path $OutputFile) {
        $size = (Get-Item $OutputFile).Length
        if ($size -gt 1000) {
            $script:skipped++
            return
        }
    }
    & ffmpeg -y -f lavfi -i "sine=frequency=523.25:duration=900" `
        -f lavfi -i "sine=frequency=659.25:duration=900" `
        -f lavfi -i "sine=frequency=783.99:duration=900" `
        -filter_complex "[0]volume=0.08,aformat=channel_layouts=mono[c];[1]volume=0.06,aformat=channel_layouts=mono[e];[2]volume=0.04,aformat=channel_layouts=mono[g];[c][e][g]amix=inputs=3:duration=longest,lowpass=f=2000,volume=0.5[out]" `
        -map "[out]" "$OutputFile" 2>$null
    $script:generated++
}

for ($idx = $From - 1; $idx -lt $To; $idx++) {
    $video = $catalog[$idx]
    $num = $idx + 1

    Write-Host "────────────────────────────────────────────────" -ForegroundColor DarkGray
    Write-Host "  [$num/$To] $($video.title)" -ForegroundColor Yellow

    # Video intro/outro
    $vDir = Join-Path $PublicDir "$($video.id)-audio"
    if (-not (Test-Path $vDir)) { New-Item -ItemType Directory -Path $vDir -Force | Out-Null }

    Write-Host "    Video intro/outro..." -ForegroundColor Gray
    Generate-TTS "Welcome! $($video.title). Let us learn A to Z!" (Join-Path $vDir "video-intro.mp3")
    Generate-TTS "Amazing Learning! You did a great job! Like and Subscribe for more fun videos!" (Join-Path $vDir "video-outro.mp3")

    # Chapters
    for ($ci = 0; $ci -lt $video.chapters.Count; $ci++) {
        $ch = $video.chapters[$ci]
        $chNum = $ci + 1

        if ($doneThemes.ContainsKey($ch.themeId)) { continue }
        $doneThemes[$ch.themeId] = $true

        $chDir = Join-Path $PublicDir "$($ch.themeId)-audio"
        if (-not (Test-Path $chDir)) { New-Item -ItemType Directory -Path $chDir -Force | Out-Null }

        Write-Host "    Chapter $chNum : $($ch.title) ($($ch.items.Count) items)" -ForegroundColor Cyan

        Generate-TTS "Chapter $chNum. $($ch.title)" (Join-Path $chDir "chapter-transition.mp3")
        Generate-TTS "$($ch.title). Let us learn!" (Join-Path $chDir "chapter-intro.mp3")
        Generate-TTS "Great Job! A to Z Complete!" (Join-Path $chDir "chapter-outro.mp3")

        for ($i = 0; $i -lt $ch.items.Count; $i++) {
            $item = $ch.items[$i]
            Generate-TTS "$($item.letter) for $($item.word)" (Join-Path $chDir "letter_$i.mp3")
        }

        Generate-BGM (Join-Path $chDir "bgm.mp3")
    }

    $elapsed = [math]::Round(((Get-Date) - $startTime).TotalMinutes, 1)
    Write-Host "    ✅ Done ($generated generated, $skipped skipped, $elapsed min)" -ForegroundColor Green
    "[$num] $($video.id) - $generated gen, $skipped skip" | Add-Content $LogFile
}

$totalTime = [math]::Round(((Get-Date) - $startTime).TotalMinutes, 1)
Write-Host ""
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host "  AUDIO COMPLETE" -ForegroundColor Cyan
Write-Host "  Generated: $generated | Skipped: $skipped | Time: $totalTime min" -ForegroundColor White
Write-Host "  Themes: $($doneThemes.Count)" -ForegroundColor White
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "  Now run:  .\scripts\render-50.ps1" -ForegroundColor Yellow
Write-Host ""
