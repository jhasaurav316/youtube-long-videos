# Phase 9 Render: Videos 401-450
# Usage:
#   .\scripts\phase9-render.ps1                    # Single GPU, HD
#   .\scripts\phase9-render.ps1 -Quality max       # Max quality
#   .\scripts\phase9-render.ps1 -Parallel          # Use all 3 GPUs
param(
    [ValidateSet("hd", "max")]
    [string]$Quality = "hd",
    [switch]$Parallel
)
if ($Parallel) {
    & "$PSScriptRoot\render-parallel-3gpu.ps1" -From 401 -To 450 -Quality $Quality
} else {
    & "$PSScriptRoot\render-all-long-videos.ps1" -From 401 -To 450 -Quality $Quality -Concurrency 100
}
