# Phase 11 Render: Videos 501-550
# Usage:
#   .\scripts\phase11-render.ps1                    # Single GPU, HD
#   .\scripts\phase11-render.ps1 -Quality max       # Max quality
#   .\scripts\phase11-render.ps1 -Parallel          # Use all 3 GPUs
param(
    [ValidateSet("hd", "max")]
    [string]$Quality = "hd",
    [switch]$Parallel
)
if ($Parallel) {
    & "$PSScriptRoot\render-parallel-3gpu.ps1" -From 501 -To 550 -Quality $Quality
} else {
    & "$PSScriptRoot\render-all-long-videos.ps1" -From 501 -To 550 -Quality $Quality -Concurrency 100
}
