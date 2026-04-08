# Phase 18 Render: Videos 851-900
# Usage:
#   .\scripts\phase18-render.ps1                    # Single GPU, HD
#   .\scripts\phase18-render.ps1 -Quality max       # Max quality
#   .\scripts\phase18-render.ps1 -Parallel          # Use all 3 GPUs
param(
    [ValidateSet("hd", "max")]
    [string]$Quality = "hd",
    [switch]$Parallel
)
if ($Parallel) {
    & "$PSScriptRoot\render-parallel-3gpu.ps1" -From 851 -To 900 -Quality $Quality
} else {
    & "$PSScriptRoot\render-all-long-videos.ps1" -From 851 -To 900 -Quality $Quality -Concurrency 100
}
