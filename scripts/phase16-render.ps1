# Phase 16 Render: Videos 751-800
# Usage:
#   .\scripts\phase16-render.ps1                    # Single GPU, HD
#   .\scripts\phase16-render.ps1 -Quality max       # Max quality
#   .\scripts\phase16-render.ps1 -Parallel          # Use all 3 GPUs
param(
    [ValidateSet("hd", "max")]
    [string]$Quality = "hd",
    [switch]$Parallel
)
if ($Parallel) {
    & "$PSScriptRoot\render-parallel-3gpu.ps1" -From 751 -To 800 -Quality $Quality
} else {
    & "$PSScriptRoot\render-all-long-videos.ps1" -From 751 -To 800 -Quality $Quality -Concurrency 100
}
