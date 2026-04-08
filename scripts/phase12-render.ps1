# Phase 12 Render: Videos 551-600
# Usage:
#   .\scripts\phase12-render.ps1                    # Single GPU, HD
#   .\scripts\phase12-render.ps1 -Quality max       # Max quality
#   .\scripts\phase12-render.ps1 -Parallel          # Use all 3 GPUs
param(
    [ValidateSet("hd", "max")]
    [string]$Quality = "hd",
    [switch]$Parallel
)
if ($Parallel) {
    & "$PSScriptRoot\render-parallel-3gpu.ps1" -From 551 -To 600 -Quality $Quality
} else {
    & "$PSScriptRoot\render-all-long-videos.ps1" -From 551 -To 600 -Quality $Quality -Concurrency 100
}
