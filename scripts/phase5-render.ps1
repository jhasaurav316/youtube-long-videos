# Phase 5 Render: Videos 201-250
# Usage:
#   .\scripts\phase5-render.ps1                    # Single GPU, HD
#   .\scripts\phase5-render.ps1 -Quality max       # Max quality
#   .\scripts\phase5-render.ps1 -Parallel          # Use all 3 GPUs
param(
    [ValidateSet("hd", "max")]
    [string]$Quality = "hd",
    [switch]$Parallel
)
if ($Parallel) {
    & "$PSScriptRoot\render-parallel-3gpu.ps1" -From 201 -To 250 -Quality $Quality
} else {
    & "$PSScriptRoot\render-all-long-videos.ps1" -From 201 -To 250 -Quality $Quality -Concurrency 100
}
