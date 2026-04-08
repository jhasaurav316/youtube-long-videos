# Phase 14 Render: Videos 651-700
# Usage:
#   .\scripts\phase14-render.ps1                    # Single GPU, HD
#   .\scripts\phase14-render.ps1 -Quality max       # Max quality
#   .\scripts\phase14-render.ps1 -Parallel          # Use all 3 GPUs
param(
    [ValidateSet("hd", "max")]
    [string]$Quality = "hd",
    [switch]$Parallel
)
if ($Parallel) {
    & "$PSScriptRoot\render-parallel-3gpu.ps1" -From 651 -To 700 -Quality $Quality
} else {
    & "$PSScriptRoot\render-all-long-videos.ps1" -From 651 -To 700 -Quality $Quality -Concurrency 100
}
