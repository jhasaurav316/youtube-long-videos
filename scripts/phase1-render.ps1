# Phase 1 Render: Videos 1-50
# Usage:
#   .\scripts\phase1-render.ps1                    # Single GPU, HD
#   .\scripts\phase1-render.ps1 -Quality max       # Max quality
#   .\scripts\phase1-render.ps1 -Parallel          # Use all 3 GPUs
param(
    [ValidateSet("hd", "max")]
    [string]$Quality = "hd",
    [switch]$Parallel
)
if ($Parallel) {
    & "$PSScriptRoot\render-parallel-3gpu.ps1" -From 1 -To 50 -Quality $Quality
} else {
    & "$PSScriptRoot\render-all-long-videos.ps1" -From 1 -To 50 -Quality $Quality -Concurrency 100
}
