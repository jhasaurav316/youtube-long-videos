# Phase 13 Render: Videos 601-650
# Usage:
#   .\scripts\phase13-render.ps1                    # Single GPU, HD
#   .\scripts\phase13-render.ps1 -Quality max       # Max quality
#   .\scripts\phase13-render.ps1 -Parallel          # Use all 3 GPUs
param(
    [ValidateSet("hd", "max")]
    [string]$Quality = "hd",
    [switch]$Parallel
)
if ($Parallel) {
    & "$PSScriptRoot\render-parallel-3gpu.ps1" -From 601 -To 650 -Quality $Quality
} else {
    & "$PSScriptRoot\render-all-long-videos.ps1" -From 601 -To 650 -Quality $Quality -Concurrency 100
}
