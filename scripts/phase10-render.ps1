# Phase 10 Render: Videos 451-500
# Usage:
#   .\scripts\phase10-render.ps1                    # Single GPU, HD
#   .\scripts\phase10-render.ps1 -Quality max       # Max quality
#   .\scripts\phase10-render.ps1 -Parallel          # Use all 3 GPUs
param(
    [ValidateSet("hd", "max")]
    [string]$Quality = "hd",
    [switch]$Parallel
)
if ($Parallel) {
    & "$PSScriptRoot\render-parallel-3gpu.ps1" -From 451 -To 500 -Quality $Quality
} else {
    & "$PSScriptRoot\render-all-long-videos.ps1" -From 451 -To 500 -Quality $Quality -Concurrency 100
}
