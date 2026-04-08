# Phase 3 Render: Videos 101-150
# Usage:
#   .\scripts\phase3-render.ps1                    # Single GPU, HD
#   .\scripts\phase3-render.ps1 -Quality max       # Max quality
#   .\scripts\phase3-render.ps1 -Parallel          # Use all 3 GPUs
param(
    [ValidateSet("hd", "max")]
    [string]$Quality = "hd",
    [switch]$Parallel
)
if ($Parallel) {
    & "$PSScriptRoot\render-parallel-3gpu.ps1" -From 101 -To 150 -Quality $Quality
} else {
    & "$PSScriptRoot\render-all-long-videos.ps1" -From 101 -To 150 -Quality $Quality -Concurrency 100
}
