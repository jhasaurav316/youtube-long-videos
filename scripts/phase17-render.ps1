# Phase 17 Render: Videos 801-850
# Usage:
#   .\scripts\phase17-render.ps1                    # Single GPU, HD
#   .\scripts\phase17-render.ps1 -Quality max       # Max quality
#   .\scripts\phase17-render.ps1 -Parallel          # Use all 3 GPUs
param(
    [ValidateSet("hd", "max")]
    [string]$Quality = "hd",
    [switch]$Parallel
)
if ($Parallel) {
    & "$PSScriptRoot\render-parallel-3gpu.ps1" -From 801 -To 850 -Quality $Quality
} else {
    & "$PSScriptRoot\render-all-long-videos.ps1" -From 801 -To 850 -Quality $Quality -Concurrency 100
}
