# Phase 20 Render: Videos 951-1000
# Usage:
#   .\scripts\phase20-render.ps1                    # Single GPU, HD
#   .\scripts\phase20-render.ps1 -Quality max       # Max quality
#   .\scripts\phase20-render.ps1 -Parallel          # Use all 3 GPUs
param(
    [ValidateSet("hd", "max")]
    [string]$Quality = "hd",
    [switch]$Parallel
)
if ($Parallel) {
    & "$PSScriptRoot\render-parallel-3gpu.ps1" -From 951 -To 1000 -Quality $Quality
} else {
    & "$PSScriptRoot\render-all-long-videos.ps1" -From 951 -To 1000 -Quality $Quality -Concurrency 100
}
