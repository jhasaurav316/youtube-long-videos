# Phase 15 Render: Videos 701-750
# Usage:
#   .\scripts\phase15-render.ps1                    # Single GPU, HD
#   .\scripts\phase15-render.ps1 -Quality max       # Max quality
#   .\scripts\phase15-render.ps1 -Parallel          # Use all 3 GPUs
param(
    [ValidateSet("hd", "max")]
    [string]$Quality = "hd",
    [switch]$Parallel
)
if ($Parallel) {
    & "$PSScriptRoot\render-parallel-3gpu.ps1" -From 701 -To 750 -Quality $Quality
} else {
    & "$PSScriptRoot\render-all-long-videos.ps1" -From 701 -To 750 -Quality $Quality -Concurrency 100
}
