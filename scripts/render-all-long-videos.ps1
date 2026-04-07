# ============================================================================
# Long Video Render Pipeline - 100 Landscape Videos (1920x1080) HIGH QUALITY
# ============================================================================
# Step 1: Run generate-all-audio.ps1 first (generates narration + BGM)
# Step 2: Run this script to render all videos
#
# Usage:
#   .\long-video\render-all-long-videos.ps1                      # All 100, HD
#   .\long-video\render-all-long-videos.ps1 -From 1 -To 10      # Videos 1-10
#   .\long-video\render-all-long-videos.ps1 -Single 1            # Just video 1
#   .\long-video\render-all-long-videos.ps1 -Quality max         # Max quality
#   .\long-video\render-all-long-videos.ps1 -Concurrency 80      # 80% CPU
# ============================================================================

param(
    [int]$From = 1,
    [int]$To = 0,
    [int]$Single = 0,
    [ValidateSet("hd", "max")]
    [string]$Quality = "hd",
    [int]$Concurrency = 75
)

$ErrorActionPreference = "Stop"
$ProjectDir = Split-Path -Parent $PSScriptRoot
if (Test-Path (Join-Path $PSScriptRoot "catalog.json")) {
    $ProjectDir = Split-Path -Parent $PSScriptRoot
}
$CatalogPath = Join-Path $PSScriptRoot "catalog.json"
$LogFile = Join-Path $PSScriptRoot "render-all-log.txt"

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

if ($Single -gt 0) { $From = $Single; $To = $Single }
if ($To -eq 0 -or $To -gt $Total) { $To = $Total }

# ---------- Pre-bundle (once) ----------
Write-Host ""
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host "  LONG VIDEO RENDER PIPELINE - HIGH QUALITY" -ForegroundColor Cyan
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "  Videos:      $Total total, rendering $From to $To" -ForegroundColor White
Write-Host "  Quality:     $($QProfile.Label)" -ForegroundColor Yellow
Write-Host "  Concurrency: $Concurrency%" -ForegroundColor White
Write-Host "  Format:      1920x1080 @ 30fps (landscape)" -ForegroundColor White
Write-Host "  Duration:    ~14 min per video" -ForegroundColor White
Write-Host ""

Write-Host "  Bundling project (one-time)..." -ForegroundColor Gray
$bundleStart = Get-Date
$bundleDir = Join-Path $ProjectDir "long-video-bundle"

Set-Location $ProjectDir
npx remotion bundle --out-dir "$bundleDir" 2>&1 | Out-Null
$bundleTime = [math]::Round(((Get-Date) - $bundleStart).TotalSeconds, 1)
Write-Host "  ✅ Bundle ready ($bundleTime sec)" -ForegroundColor Green
Write-Host ""

@(
    "================================================================"
    "  Long Video Render Log - HIGH QUALITY"
    "  Started: $(Get-Date)"
    "  Quality: $($QProfile.Label)"
    "  Concurrency: $Concurrency%"
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
    Write-Host "  Composition: $compId" -ForegroundColor DarkGray

    # Skip if already rendered
    if (Test-Path $outputFile) {
        $fileSize = [math]::Round((Get-Item $outputFile).Length / 1MB, 1)
        Write-Host "  SKIP: Already rendered ($fileSize MB)" -ForegroundColor DarkCyan
        $skipCount++
        "[$num] SKIP $videoId ($fileSize MB)" | Add-Content $LogFile
        continue
    }

    $renderStart = Get-Date

    # Build render command using pre-bundled site
    $renderArgs = @(
        "remotion", "render",
        "--bundle-dir=`"$bundleDir`"",
        $compId, "`"$outputFile`"",
        "--codec=h264",
        "--crf=$($QProfile.CRF)",
        "--concurrency=$Concurrency%"
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

            # Estimate remaining time
            $avgTime = ((Get-Date) - $startTime).TotalMinutes / ($successCount + 1)
            $remaining = [math]::Round($avgTime * ($To - $num), 0)
            Write-Host "  ⏱️  Est. remaining: ~$remaining min" -ForegroundColor DarkGray

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

# ---------- Cleanup bundle ----------
if (Test-Path $bundleDir) {
    Remove-Item -Recurse -Force $bundleDir
    Write-Host ""
    Write-Host "  Bundle cleaned up." -ForegroundColor DarkGray
}

# ---------- Summary ----------
$totalTime = [math]::Round(((Get-Date) - $startTime).TotalMinutes, 1)
$totalSize = 0
$outDir = Join-Path $ProjectDir "out" "long-video"
if (Test-Path $outDir) {
    $totalSize = [math]::Round((Get-ChildItem $outDir -Filter "*.mp4" | Measure-Object -Property Length -Sum).Sum / 1GB, 2)
}

Write-Host ""
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host "  RENDER COMPLETE" -ForegroundColor Cyan
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host "  Success:    $successCount" -ForegroundColor Green
Write-Host "  Skipped:    $skipCount" -ForegroundColor DarkCyan
Write-Host "  Failed:     $failCount" -ForegroundColor $(if ($failCount -gt 0) { "Red" } else { "Gray" })
Write-Host "  Time:       $totalTime minutes" -ForegroundColor White
Write-Host "  Total size: $totalSize GB" -ForegroundColor White
Write-Host "  Output:     out\long-video\" -ForegroundColor White
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host ""

@(
    ""
    "================================================================"
    "  Completed: $(Get-Date)"
    "  Success: $successCount | Skipped: $skipCount | Failed: $failCount"
    "  Total time: $totalTime minutes"
    "  Total size: $totalSize GB"
    "================================================================"
) | Add-Content $LogFile
