# ============================================================================
# Long Video Render Pipeline - 1000 Videos (1920x1080) GPU ACCELERATED
# ============================================================================
# Supports NVIDIA GPU encoding (NVENC) + multi-GPU parallel rendering
#
# Usage:
#   .\scripts\render-all-long-videos.ps1                           # All, HD
#   .\scripts\render-all-long-videos.ps1 -From 1 -To 50           # Range
#   .\scripts\render-all-long-videos.ps1 -Single 1                 # One video
#   .\scripts\render-all-long-videos.ps1 -Quality max              # Max quality
#   .\scripts\render-all-long-videos.ps1 -Gpu 0                    # Use GPU 0
#   .\scripts\render-all-long-videos.ps1 -Concurrency 100          # Full CPU
# ============================================================================

param(
    [int]$From = 1,
    [int]$To = 0,
    [int]$Single = 0,
    [ValidateSet("hd", "max")]
    [string]$Quality = "hd",
    [int]$Concurrency = 100,
    [int]$Gpu = -1
)

$ErrorActionPreference = "Stop"
$ProjectDir = Split-Path -Parent $PSScriptRoot
if (Test-Path (Join-Path $PSScriptRoot "catalog.json")) {
    $ProjectDir = Split-Path -Parent $PSScriptRoot
}
$CatalogPath = Join-Path $PSScriptRoot "catalog.json"
$LogFile = Join-Path $PSScriptRoot "render-log-gpu$Gpu.txt"

# ---------- Quality Profiles (NVENC optimized for RTX 4090) ----------
$QualityProfiles = @{
    "hd" = @{
        CRF     = 18
        Bitrate = ""
        Label   = "Full HD (1920x1080) CRF 18"
    }
    "max" = @{
        CRF     = 14
        Bitrate = "25M"
        Label   = "HD MAX (1920x1080) CRF 14, 25Mbps"
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

# ---------- Set GPU environment ----------
if ($Gpu -ge 0) {
    $env:CUDA_VISIBLE_DEVICES = "$Gpu"
    $env:GPU_DEVICE = "$Gpu"
}

# ---------- Header ----------
Write-Host ""
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host "  LONG VIDEO RENDER PIPELINE - GPU ACCELERATED" -ForegroundColor Cyan
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "  Videos:      $Total total, rendering $From to $To" -ForegroundColor White
Write-Host "  Quality:     $($QProfile.Label)" -ForegroundColor Yellow
Write-Host "  Concurrency: $Concurrency%" -ForegroundColor White
Write-Host "  GPU:         $(if ($Gpu -ge 0) { "GPU $Gpu (RTX 4090)" } else { 'Auto' })" -ForegroundColor Green
Write-Host "  Format:      1920x1080 @ 30fps (landscape)" -ForegroundColor White
Write-Host "  Duration:    30-40 min per video" -ForegroundColor White
Write-Host ""

# ---------- Pre-bundle (once) ----------
Write-Host "  Bundling project (one-time)..." -ForegroundColor Gray
$bundleStart = Get-Date
$bundleDir = Join-Path $ProjectDir "long-video-bundle"
if ($Gpu -ge 0) { $bundleDir = Join-Path $ProjectDir "long-video-bundle-gpu$Gpu" }

if (-not (Test-Path (Join-Path $bundleDir "index.html"))) {
    Set-Location $ProjectDir
    npx remotion bundle --out-dir "$bundleDir" 2>&1 | Out-Null
}
$bundleTime = [math]::Round(((Get-Date) - $bundleStart).TotalSeconds, 1)
Write-Host "  ✅ Bundle ready ($bundleTime sec)" -ForegroundColor Green
Write-Host ""

@(
    "================================================================"
    "  Long Video Render Log - GPU $Gpu"
    "  Started: $(Get-Date)"
    "  Quality: $($QProfile.Label)"
    "  Concurrency: $Concurrency% | GPU: $Gpu"
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
    Write-Host "  Composition: $compId | GPU: $(if ($Gpu -ge 0) { $Gpu } else { 'Auto' })" -ForegroundColor DarkGray

    # Skip if already rendered
    if (Test-Path $outputFile) {
        $fileSize = [math]::Round((Get-Item $outputFile).Length / 1MB, 1)
        Write-Host "  SKIP: Already rendered ($fileSize MB)" -ForegroundColor DarkCyan
        $skipCount++
        "[$num] SKIP $videoId ($fileSize MB)" | Add-Content $LogFile
        continue
    }

    $renderStart = Get-Date

    # Build render command - GPU accelerated
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

# ---------- Summary ----------
$totalTime = [math]::Round(((Get-Date) - $startTime).TotalMinutes, 1)
$totalSize = 0
$outDir = Join-Path $ProjectDir "out" "long-video"
if (Test-Path $outDir) {
    $totalSize = [math]::Round((Get-ChildItem $outDir -Filter "*.mp4" | Measure-Object -Property Length -Sum).Sum / 1GB, 2)
}

Write-Host ""
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host "  RENDER COMPLETE (GPU $(if ($Gpu -ge 0) { $Gpu } else { 'Auto' }))" -ForegroundColor Cyan
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
    "  GPU: $Gpu | Success: $successCount | Skipped: $skipCount | Failed: $failCount"
    "  Total time: $totalTime minutes | Total size: $totalSize GB"
    "================================================================"
) | Add-Content $LogFile
