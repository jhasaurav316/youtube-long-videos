# Phase 2 Render: Videos 51-100
# Usage:
#   .\scripts\phase2-render.ps1                    # Single GPU, HD
#   .\scripts\phase2-render.ps1 -Quality max       # Max quality
#   .\scripts\phase2-render.ps1 -Parallel          # Use all 3 GPUs
param(
    [ValidateSet("hd", "max")]
    [string]$Quality = "hd",
    [switch]$Parallel
)
if ($Parallel) {
    & "$PSScriptRoot\render-parallel-3gpu.ps1" -From 51 -To 100 -Quality $Quality
} else {
    & "$PSScriptRoot\render-all-long-videos.ps1" -From 51 -To 100 -Quality $Quality -Concurrency 100
}
