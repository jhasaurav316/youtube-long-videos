# ============================================================================
# Render 50 Videos (10-15 min each) - OFFLINE CAPABLE
# ============================================================================
# All audio is pre-generated in the repo. No internet needed.
#
# Usage:
#   .\scripts\render-50.ps1                    # All 50, HD
#   .\scripts\render-50.ps1 -From 1 -To 10    # Videos 1-10
#   .\scripts\render-50.ps1 -Single 1          # Just video 1
#   .\scripts\render-50.ps1 -Quality max       # Max quality
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
$CatalogPath = Join-Path $PSScriptRoot "catalog-50.json"
$LogFile = Join-Path $PSScriptRoot "render-50-log.txt"

$QualityProfiles = @{
    "hd" = @{ CRF = 18; Bitrate = ""; Label = "Full HD (1920x1080) CRF 18" }
    "max" = @{ CRF = 14; Bitrate = "20M"; Label = "HD MAX (1920x1080) CRF 14, 20Mbps" }
}
$QProfile = $QualityProfiles[$Quality]

function Convert-ToPascalCase {
    param([string]$str)
    ($str -split '[-_\s]+' | ForEach-Object {
        $_.Substring(0,1).ToUpper() + $_.Substring(1).ToLower()
    }) -join ''
}

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
Write-Host "  50 VIDEOS RENDER (10-15 min each) - OFFLINE" -ForegroundColor Cyan
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "  Videos:    $Total total, rendering $From to $To" -ForegroundColor White
Write-Host "  Quality:   $($QProfile.Label)" -ForegroundColor Yellow
Write-Host "  Format:    1920x1080 @ 30fps" -ForegroundColor White
Write-Host ""

# Pre-bundle
Write-Host "  Bundling project..." -ForegroundColor Gray
$bundleDir = Join-Path $ProjectDir "video-50-bundle"
if (-not (Test-Path (Join-Path $bundleDir "index.html"))) {
    Set-Location $ProjectDir
    npx remotion bundle --out-dir "$bundleDir" 2>&1 | Out-Null
}
Write-Host "  ✅ Bundle ready" -ForegroundColor Green
Write-Host ""

@("  50 Videos Render Log", "  Started: $(Get-Date)", "  Quality: $($QProfile.Label)", "") | Set-Content $LogFile

$startTime = Get-Date
$successCount = 0; $skipCount = 0; $failCount = 0

for ($idx = $From - 1; $idx -lt $To; $idx++) {
    $video = $catalog[$idx]
    $videoId = $video.id
    $compId = Convert-ToPascalCase $videoId
    $num = $idx + 1

    $outDir = Join-Path $ProjectDir "out" "50-videos"
    if (-not (Test-Path $outDir)) { New-Item -ItemType Directory -Path $outDir -Force | Out-Null }

    $outputFile = Join-Path $outDir "$videoId.mp4"

    Write-Host "────────────────────────────────────────────────" -ForegroundColor DarkGray
    Write-Host "  [$num/$To] $($video.title)" -ForegroundColor Yellow

    if (Test-Path $outputFile) {
        $fileSize = [math]::Round((Get-Item $outputFile).Length / 1MB, 1)
        Write-Host "  SKIP: Already rendered ($fileSize MB)" -ForegroundColor DarkCyan
        $skipCount++
        continue
    }

    $renderStart = Get-Date
    $renderArgs = @(
        "remotion", "render",
        "--bundle-dir=`"$bundleDir`"",
        $compId, "`"$outputFile`"",
        "--codec=h264", "--crf=$($QProfile.CRF)", "--concurrency=100%"
    )
    if ($QProfile.Bitrate) { $renderArgs += "--video-bitrate=$($QProfile.Bitrate)" }

    try {
        Write-Host "  Rendering..." -ForegroundColor Gray
        Invoke-Expression "npx $($renderArgs -join ' ')" 2>&1 | Out-Null

        if ($LASTEXITCODE -ne 0) { throw "Exit code $LASTEXITCODE" }

        $renderTime = [math]::Round(((Get-Date) - $renderStart).TotalMinutes, 1)
        if (Test-Path $outputFile) {
            $fileSize = [math]::Round((Get-Item $outputFile).Length / 1MB, 1)
            Write-Host "  ✅ Done: $fileSize MB in $renderTime min" -ForegroundColor Green
            $avgTime = ((Get-Date) - $startTime).TotalMinutes / ($successCount + 1)
            $remaining = [math]::Round($avgTime * ($To - $num), 0)
            Write-Host "  ⏱️  Est. remaining: ~$remaining min" -ForegroundColor DarkGray
            "[$num] OK $videoId ($fileSize MB, $renderTime min)" | Add-Content $LogFile
            $successCount++
        } else { $failCount++ }
    } catch {
        Write-Host "  ❌ Error: $_" -ForegroundColor Red
        "[$num] FAIL $videoId ($_)" | Add-Content $LogFile
        $failCount++
    }
}

$totalTime = [math]::Round(((Get-Date) - $startTime).TotalMinutes, 1)
Write-Host ""
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host "  RENDER COMPLETE" -ForegroundColor Cyan
Write-Host "  Success: $successCount | Skipped: $skipCount | Failed: $failCount" -ForegroundColor White
Write-Host "  Time: $totalTime min | Output: out\50-videos\" -ForegroundColor White
Write-Host "================================================================" -ForegroundColor Cyan
