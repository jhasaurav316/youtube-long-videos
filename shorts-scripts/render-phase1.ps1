# ============================================================================
# Phase 1 Render Pipeline - Animals (30) + Birds (20) = 50 Videos
# ============================================================================
# Optimized for RTX 4090 24GB VRAM + i9 10th gen
#
# Usage:
#   .\render-phase1.ps1                    # Default: 4K quality
#   .\render-phase1.ps1 -Quality hd        # 1080x1920 (faster)
#   .\render-phase1.ps1 -Quality 4k        # 2160x3840 (default)
#   .\render-phase1.ps1 -Quality max       # 2160x3840 + high bitrate
#   .\render-phase1.ps1 -From 5 -To 10    # Render videos 5-10 only
#   .\render-phase1.ps1 -SkipAudio        # Skip audio generation
# ============================================================================

param(
    [switch]$SkipAudio,
    [int]$From = 1,
    [int]$To = 0,
    [ValidateSet("hd", "4k", "max")]
    [string]$Quality = "hd"
)

$ErrorActionPreference = "Stop"
$ProjectDir = $PSScriptRoot
$LogFile = Join-Path $ProjectDir "phase1-render-log.txt"

# ---------- Quality Profiles (RTX 4090 optimized) ----------
$QualityProfiles = @{
    "hd" = @{
        Scale   = 1
        CRF     = 18
        Bitrate = ""
        Label   = "Full HD (1080x1920) CRF 18"
    }
    "4k" = @{
        Scale   = 2
        CRF     = 16
        Bitrate = ""
        Label   = "4K UHD (2160x3840) CRF 16"
    }
    "max" = @{
        Scale   = 2
        CRF     = 12
        Bitrate = "25M"
        Label   = "4K MAX (2160x3840) CRF 12, 25Mbps"
    }
}

$QProfile = $QualityProfiles[$Quality]

# ---------- Helpers ----------
function Convert-ToPascalCase {
    param([string]$str)
    ($str -split '[-_\s]+' | ForEach-Object {
        $_.Substring(0,1).ToUpper() + $_.Substring(1).ToLower()
    }) -join ''
}

# ---------- Phase 1 Catalogs ----------
$Catalogs = @(
    @{ Path = "animal-names\catalog.json"; Folder = "animal-names"; Register = "animal-names\register-compositions.js" },
    @{ Path = "bird-names\catalog.json";   Folder = "bird-names";   Register = "bird-names\register-compositions.js" }
)

# Count total videos
$allVideos = @()
foreach ($cat in $Catalogs) {
    $catPath = Join-Path $ProjectDir $cat.Path
    if (Test-Path $catPath) {
        $json = Get-Content $catPath -Raw | ConvertFrom-Json
        $videos = if ($json -is [System.Array]) { $json } else { $json.videos }
        foreach ($v in $videos) {
            $allVideos += @{ Video = $v; Folder = $cat.Folder }
        }
    }
}

$Total = $allVideos.Count
if ($To -eq 0 -or $To -gt $Total) { $To = $Total }

# ---------- Header ----------
Write-Host ""
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host "  PHASE 1 RENDER PIPELINE - RTX 4090 Optimized" -ForegroundColor Cyan
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "  Videos:    $Total total, rendering $From to $To" -ForegroundColor White
Write-Host "  Quality:   $($QProfile.Label)" -ForegroundColor Yellow
Write-Host "  Animals:   30 videos (Indian Wildlife, Safari, Farm, Pets...)" -ForegroundColor White
Write-Host "  Birds:     20 videos (Indian, Tropical, Garden, Prey...)" -ForegroundColor White
Write-Host ""

@(
    "================================================================"
    "  Phase 1 Render Log"
    "  Started: $(Get-Date)"
    "  Quality: $($QProfile.Label)"
    "================================================================"
    ""
) | Set-Content $LogFile

$startTime = Get-Date

# ======================== STEP 1: AUDIO ========================
if (-not $SkipAudio) {
    Write-Host "────────────────────────────────────────────────" -ForegroundColor DarkGray
    Write-Host "  STEP 1: Generating Audio (edge-tts Indian English)" -ForegroundColor Yellow
    Write-Host "────────────────────────────────────────────────" -ForegroundColor DarkGray
    Write-Host ""

    $audioScript = Join-Path $ProjectDir "generate-audio-phase1.ps1"
    if (Test-Path $audioScript) {
        & $audioScript
        Write-Host "  Audio generation complete!" -ForegroundColor Green
    } else {
        Write-Host "  generate-audio-phase1.ps1 not found, skipping audio" -ForegroundColor Yellow
    }
    Write-Host ""
} else {
    Write-Host "  STEP 1: Audio generation SKIPPED" -ForegroundColor DarkGray
    Write-Host ""
}

# ======================== STEP 2: REGISTER ========================
Write-Host "────────────────────────────────────────────────" -ForegroundColor DarkGray
Write-Host "  STEP 2: Registering Compositions" -ForegroundColor Yellow
Write-Host "────────────────────────────────────────────────" -ForegroundColor DarkGray
Write-Host ""

foreach ($cat in $Catalogs) {
    $regScript = Join-Path $ProjectDir $cat.Register
    if (Test-Path $regScript) {
        node $regScript
    }
}
Write-Host "  Compositions registered!" -ForegroundColor Green
Write-Host ""

# ======================== STEP 3: RENDER (4K) ========================
Write-Host "────────────────────────────────────────────────" -ForegroundColor DarkGray
Write-Host "  STEP 3: Rendering Videos ($($QProfile.Label))" -ForegroundColor Yellow
Write-Host "────────────────────────────────────────────────" -ForegroundColor DarkGray
Write-Host ""

$rendered = 0
$skipped = 0
$failed = 0

for ($i = 0; $i -lt $allVideos.Count; $i++) {
    $idx = $i + 1

    # Range filter
    if ($idx -lt $From -or $idx -gt $To) { continue }

    $entry = $allVideos[$i]
    $video = $entry.Video
    $folder = $entry.Folder
    $videoId = $video.id
    $compId = Convert-ToPascalCase $videoId

    # Output directory
    $outDir = Join-Path $ProjectDir "out" $folder
    if (-not (Test-Path $outDir)) {
        New-Item -ItemType Directory -Path $outDir -Force | Out-Null
    }

    $outputFile = Join-Path $outDir "$videoId.mp4"

    # Skip already-rendered
    if (Test-Path $outputFile) {
        $skipped++
        Write-Host "  [$idx/$Total] SKIP: $videoId (exists)" -ForegroundColor DarkYellow
        continue
    }

    $elapsed = (Get-Date) - $startTime
    Write-Host "  [$idx/$Total] $($video.title)" -ForegroundColor Cyan -NoNewline
    Write-Host " ($($QProfile.Label))" -ForegroundColor DarkGray -NoNewline
    Write-Host " [${elapsed:hh\:mm\:ss}]" -ForegroundColor DarkGray

    # Build render command with quality settings
    $renderArgs = @(
        "remotion", "render", $compId, "`"$outputFile`"",
        "--concurrency=100%",
        "--log=error",
        "--crf=$($QProfile.CRF)",
        "--codec=h264",
        "--pixel-format=yuv420p"
    )

    if ($QProfile.Scale -gt 1) {
        $renderArgs += "--scale=$($QProfile.Scale)"
    }

    if ($QProfile.Bitrate) {
        $renderArgs += "--video-bitrate=$($QProfile.Bitrate)"
    }

    $renderCmd = "npx $($renderArgs -join ' ')"

    try {
        Invoke-Expression $renderCmd 2>&1 | Tee-Object -Append -FilePath $LogFile
        if ($LASTEXITCODE -eq 0) {
            $rendered++
            $fileSize = [math]::Round((Get-Item $outputFile).Length / 1MB, 1)
            Write-Host "    Done! (${fileSize} MB)" -ForegroundColor Green
            Add-Content $LogFile "  [$idx] OK: $videoId (${fileSize} MB)"
        } else {
            $failed++
            Write-Host "    FAILED!" -ForegroundColor Red
            Add-Content $LogFile "  [$idx] FAILED: $videoId"
        }
    } catch {
        $failed++
        Write-Host "    ERROR: $_" -ForegroundColor Red
        Add-Content $LogFile "  [$idx] ERROR: $videoId - $_"
    }
}

# ---------- Summary ----------
$endTime = Get-Date
$elapsed = $endTime - $startTime

Write-Host ""
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host "  PHASE 1 RENDER COMPLETE!" -ForegroundColor Green
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "  Quality:   $($QProfile.Label)" -ForegroundColor Yellow
Write-Host "  Rendered:  $rendered" -ForegroundColor Green
Write-Host "  Skipped:   $skipped" -ForegroundColor Yellow
Write-Host "  Failed:    $failed" -ForegroundColor $(if ($failed -gt 0) { "Red" } else { "White" })
Write-Host "  Total:     $($rendered + $skipped + $failed) / $Total" -ForegroundColor White
Write-Host "  Time:      $($elapsed.ToString('hh\:mm\:ss'))" -ForegroundColor White
Write-Host ""
Write-Host "  Output:    out\animal-names\ (30 videos)" -ForegroundColor White
Write-Host "             out\bird-names\ (20 videos)" -ForegroundColor White
Write-Host "================================================================" -ForegroundColor Cyan

Add-Content $LogFile "`n================================================================"
Add-Content $LogFile "  COMPLETE: $rendered rendered, $skipped skipped, $failed failed"
Add-Content $LogFile "  Quality: $($QProfile.Label)"
Add-Content $LogFile "  Time: $($elapsed.ToString('hh\:mm\:ss'))"
Add-Content $LogFile "================================================================"
