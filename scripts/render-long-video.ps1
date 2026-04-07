# ============================================================================
# Long Video Render Pipeline - 100 Landscape Videos (1920x1080)
# ============================================================================
# Renders long-form YouTube compilation videos from catalog.json
#
# Usage:
#   .\long-video\render-long-video.ps1                     # All videos, HD
#   .\long-video\render-long-video.ps1 -From 1 -To 5      # Videos 1-5 only
#   .\long-video\render-long-video.ps1 -Quality max        # High bitrate
#   .\long-video\render-long-video.ps1 -Single 1           # Render just video 1
# ============================================================================

param(
    [int]$From = 1,
    [int]$To = 0,
    [int]$Single = 0,
    [ValidateSet("hd", "max")]
    [string]$Quality = "hd"
)

$ErrorActionPreference = "Stop"
$ProjectDir = Split-Path -Parent $PSScriptRoot
# If run from project root: $ProjectDir = $PSScriptRoot's parent is wrong
# Fix: detect if we're in long-video subfolder
if (Test-Path (Join-Path $PSScriptRoot "catalog.json")) {
    $ProjectDir = Split-Path -Parent $PSScriptRoot
} else {
    $ProjectDir = $PSScriptRoot
}
$CatalogPath = Join-Path $PSScriptRoot "catalog.json"
$LogFile = Join-Path $PSScriptRoot "render-log.txt"

# ---------- Quality Profiles ----------
$QualityProfiles = @{
    "hd" = @{
        CRF     = 18
        Bitrate = ""
        Label   = "Full HD (1920x1080) CRF 18"
    }
    "max" = @{
        CRF     = 14
        Bitrate = "20M"
        Label   = "HD MAX (1920x1080) CRF 14, 20Mbps"
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

# ---------- Load Catalog ----------
if (-not (Test-Path $CatalogPath)) {
    Write-Host "ERROR: catalog.json not found. Run generate-catalog.js first." -ForegroundColor Red
    exit 1
}

$catalog = Get-Content $CatalogPath -Raw | ConvertFrom-Json
$Total = $catalog.Count

# Handle -Single flag
if ($Single -gt 0) {
    $From = $Single
    $To = $Single
}

if ($To -eq 0 -or $To -gt $Total) { $To = $Total }

# ---------- Header ----------
Write-Host ""
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host "  LONG VIDEO RENDER PIPELINE - Landscape 1920x1080" -ForegroundColor Cyan
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "  Videos:    $Total total, rendering $From to $To" -ForegroundColor White
Write-Host "  Quality:   $($QProfile.Label)" -ForegroundColor Yellow
Write-Host "  Format:    1920x1080 @ 30fps (landscape)" -ForegroundColor White
Write-Host "  Duration:  ~14 min per video" -ForegroundColor White
Write-Host ""

@(
    "================================================================"
    "  Long Video Render Log"
    "  Started: $(Get-Date)"
    "  Quality: $($QProfile.Label)"
    "  Range: $From to $To"
    "================================================================"
    ""
) | Set-Content $LogFile

$startTime = Get-Date
$successCount = 0
$skipCount = 0
$failCount = 0

# ---------- Render Loop ----------
for ($idx = $From - 1; $idx -lt $To; $idx++) {
    $video = $catalog[$idx]
    $videoId = $video.id
    $compId = Convert-ToPascalCase $videoId
    $num = $idx + 1

    $outDir = Join-Path $ProjectDir "out" "long-video"
    if (-not (Test-Path $outDir)) {
        New-Item -ItemType Directory -Path $outDir -Force | Out-Null
    }

    $outputFile = Join-Path $outDir "$videoId.mp4"

    Write-Host "────────────────────────────────────────────────" -ForegroundColor DarkGray
    Write-Host "  [$num/$To] $($video.title)" -ForegroundColor Yellow
    Write-Host "  ID: $compId" -ForegroundColor DarkGray

    # Skip if already rendered
    if (Test-Path $outputFile) {
        $fileSize = [math]::Round((Get-Item $outputFile).Length / 1MB, 1)
        Write-Host "  SKIP: Already rendered ($fileSize MB)" -ForegroundColor DarkCyan
        $skipCount++
        "[$num] SKIP $videoId ($fileSize MB)" | Add-Content $LogFile
        continue
    }

    $renderStart = Get-Date

    # Build render command
    $renderArgs = @(
        "remotion", "render", $compId, "`"$outputFile`"",
        "--codec=h264",
        "--crf=$($QProfile.CRF)",
        "--concurrency=100%"
    )

    if ($QProfile.Bitrate) {
        $renderArgs += "--video-bitrate=$($QProfile.Bitrate)"
    }

    $cmd = "npx $($renderArgs -join ' ')"

    try {
        Write-Host "  Rendering..." -ForegroundColor Gray
        $result = Invoke-Expression $cmd 2>&1

        if ($LASTEXITCODE -ne 0) {
            throw "Render failed with exit code $LASTEXITCODE"
        }

        $renderTime = [math]::Round(((Get-Date) - $renderStart).TotalMinutes, 1)

        if (Test-Path $outputFile) {
            $fileSize = [math]::Round((Get-Item $outputFile).Length / 1MB, 1)
            Write-Host "  ✅ Done: $fileSize MB in $renderTime min" -ForegroundColor Green
            "[$num] OK $videoId ($fileSize MB, $renderTime min)" | Add-Content $LogFile
            $successCount++
        } else {
            Write-Host "  ❌ Output file not found!" -ForegroundColor Red
            "[$num] FAIL $videoId (no output file)" | Add-Content $LogFile
            $failCount++
        }
    } catch {
        $renderTime = [math]::Round(((Get-Date) - $renderStart).TotalMinutes, 1)
        Write-Host "  ❌ Error: $_" -ForegroundColor Red
        "[$num] FAIL $videoId ($_)" | Add-Content $LogFile
        $failCount++
    }
}

# ---------- Summary ----------
$totalTime = [math]::Round(((Get-Date) - $startTime).TotalMinutes, 1)

Write-Host ""
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host "  RENDER COMPLETE" -ForegroundColor Cyan
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host "  Success:  $successCount" -ForegroundColor Green
Write-Host "  Skipped:  $skipCount" -ForegroundColor DarkCyan
Write-Host "  Failed:   $failCount" -ForegroundColor $(if ($failCount -gt 0) { "Red" } else { "Gray" })
Write-Host "  Time:     $totalTime minutes" -ForegroundColor White
Write-Host "  Output:   out\long-video\" -ForegroundColor White
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host ""

@(
    ""
    "================================================================"
    "  Completed: $(Get-Date)"
    "  Success: $successCount | Skipped: $skipCount | Failed: $failCount"
    "  Total time: $totalTime minutes"
    "================================================================"
) | Add-Content $LogFile
