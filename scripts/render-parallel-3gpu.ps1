# ============================================================================
# PARALLEL 3-GPU RENDER - Runs 3 videos simultaneously (1 per GPU)
# ============================================================================
# Splits the video range across 3 RTX 4090 GPUs and runs them in parallel.
# Each GPU renders its own subset of videos independently.
#
# Usage:
#   .\scripts\render-parallel-3gpu.ps1                          # All 1000
#   .\scripts\render-parallel-3gpu.ps1 -From 1 -To 150         # Videos 1-150
#   .\scripts\render-parallel-3gpu.ps1 -Quality max             # Max quality
#   .\scripts\render-parallel-3gpu.ps1 -Concurrency 100         # Full CPU per GPU
# ============================================================================

param(
    [int]$From = 1,
    [int]$To = 0,
    [ValidateSet("hd", "max")]
    [string]$Quality = "hd",
    [int]$Concurrency = 100
)

$ErrorActionPreference = "Stop"
$ScriptDir = $PSScriptRoot

# Load catalog to get total count
$CatalogPath = Join-Path $ScriptDir "catalog.json"
if (-not (Test-Path $CatalogPath)) {
    Write-Host "ERROR: catalog.json not found." -ForegroundColor Red
    exit 1
}
$catalog = Get-Content $CatalogPath -Raw | ConvertFrom-Json
$Total = $catalog.Count
if ($To -eq 0 -or $To -gt $Total) { $To = $Total }

$videoCount = $To - $From + 1
$perGpu = [math]::Ceiling($videoCount / 3)

$gpu0From = $From
$gpu0To   = [math]::Min($From + $perGpu - 1, $To)

$gpu1From = $gpu0To + 1
$gpu1To   = [math]::Min($gpu1From + $perGpu - 1, $To)

$gpu2From = $gpu1To + 1
$gpu2To   = $To

Write-Host ""
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host "  3-GPU PARALLEL RENDER PIPELINE" -ForegroundColor Cyan
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "  Total videos:  $videoCount ($From to $To)" -ForegroundColor White
Write-Host "  Quality:       $Quality" -ForegroundColor Yellow
Write-Host "  Concurrency:   $Concurrency% per GPU" -ForegroundColor White
Write-Host ""
Write-Host "  GPU 0:  Videos $gpu0From - $gpu0To  ($($gpu0To - $gpu0From + 1) videos)" -ForegroundColor Green
Write-Host "  GPU 1:  Videos $gpu1From - $gpu1To  ($($gpu1To - $gpu1From + 1) videos)" -ForegroundColor Green
if ($gpu2From -le $To) {
    Write-Host "  GPU 2:  Videos $gpu2From - $gpu2To  ($($gpu2To - $gpu2From + 1) videos)" -ForegroundColor Green
}
Write-Host ""
Write-Host "  Starting all 3 GPUs in parallel..." -ForegroundColor Yellow
Write-Host ""

$renderScript = Join-Path $ScriptDir "render-all-long-videos.ps1"

# Launch GPU 0
$job0 = Start-Job -ScriptBlock {
    param($script, $from, $to, $quality, $concurrency)
    & $script -From $from -To $to -Quality $quality -Concurrency $concurrency -Gpu 0
} -ArgumentList $renderScript, $gpu0From, $gpu0To, $Quality, $Concurrency

Write-Host "  ✅ GPU 0 started: Videos $gpu0From-$gpu0To (Job $($job0.Id))" -ForegroundColor Green

# Launch GPU 1
$job1 = $null
if ($gpu1From -le $To) {
    $job1 = Start-Job -ScriptBlock {
        param($script, $from, $to, $quality, $concurrency)
        & $script -From $from -To $to -Quality $quality -Concurrency $concurrency -Gpu 1
    } -ArgumentList $renderScript, $gpu1From, $gpu1To, $Quality, $Concurrency

    Write-Host "  ✅ GPU 1 started: Videos $gpu1From-$gpu1To (Job $($job1.Id))" -ForegroundColor Green
}

# Launch GPU 2
$job2 = $null
if ($gpu2From -le $To) {
    $job2 = Start-Job -ScriptBlock {
        param($script, $from, $to, $quality, $concurrency)
        & $script -From $from -To $to -Quality $quality -Concurrency $concurrency -Gpu 2
    } -ArgumentList $renderScript, $gpu2From, $gpu2To, $Quality, $Concurrency

    Write-Host "  ✅ GPU 2 started: Videos $gpu2From-$gpu2To (Job $($job2.Id))" -ForegroundColor Green
}

Write-Host ""
Write-Host "────────────────────────────────────────────────" -ForegroundColor DarkGray
Write-Host "  All GPUs running. Monitoring progress..." -ForegroundColor Yellow
Write-Host "  Press Ctrl+C to stop (videos already rendered are safe)" -ForegroundColor DarkGray
Write-Host "────────────────────────────────────────────────" -ForegroundColor DarkGray
Write-Host ""

# Monitor jobs
$startTime = Get-Date
$jobs = @($job0, $job1, $job2) | Where-Object { $_ -ne $null }

while ($jobs | Where-Object { $_.State -eq 'Running' }) {
    Start-Sleep -Seconds 30

    $elapsed = [math]::Round(((Get-Date) - $startTime).TotalMinutes, 1)
    $running = ($jobs | Where-Object { $_.State -eq 'Running' }).Count
    $completed = ($jobs | Where-Object { $_.State -eq 'Completed' }).Count
    $failed = ($jobs | Where-Object { $_.State -eq 'Failed' }).Count

    Write-Host "  [$elapsed min] Running: $running | Completed: $completed | Failed: $failed" -ForegroundColor DarkGray

    # Print any new output from jobs
    foreach ($job in $jobs) {
        $output = Receive-Job $job 2>$null
        if ($output) {
            $gpuNum = if ($job -eq $job0) { 0 } elseif ($job -eq $job1) { 1 } else { 2 }
            foreach ($line in $output) {
                if ($line -match '✅|❌|SKIP|Done:') {
                    Write-Host "  [GPU $gpuNum] $line" -ForegroundColor $(if ($line -match '❌') { 'Red' } else { 'DarkCyan' })
                }
            }
        }
    }
}

# Final summary
$totalTime = [math]::Round(((Get-Date) - $startTime).TotalMinutes, 1)

Write-Host ""
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host "  3-GPU PARALLEL RENDER COMPLETE" -ForegroundColor Cyan
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host ""

foreach ($job in $jobs) {
    $gpuNum = if ($job -eq $job0) { 0 } elseif ($job -eq $job1) { 1 } else { 2 }
    Write-Host "  GPU $gpuNum : $($job.State)" -ForegroundColor $(if ($job.State -eq 'Completed') { 'Green' } else { 'Red' })

    if ($job.State -eq 'Failed') {
        $err = Receive-Job $job -ErrorAction SilentlyContinue
        Write-Host "    Error: $err" -ForegroundColor Red
    }
}

$outDir = Join-Path (Split-Path -Parent $ScriptDir) "out" "long-video"
$totalSize = 0
if (Test-Path $outDir) {
    $totalSize = [math]::Round((Get-ChildItem $outDir -Filter "*.mp4" | Measure-Object -Property Length -Sum).Sum / 1GB, 2)
    $totalFiles = (Get-ChildItem $outDir -Filter "*.mp4").Count
    Write-Host ""
    Write-Host "  Total rendered: $totalFiles videos ($totalSize GB)" -ForegroundColor White
}

Write-Host "  Total time:    $totalTime minutes" -ForegroundColor White
Write-Host "  Output:        out\long-video\" -ForegroundColor White
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host ""

# Cleanup jobs
$jobs | Remove-Job -Force
