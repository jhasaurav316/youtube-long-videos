# Phase 19 Render: Videos 901-950
# Usage:
#   .\scripts\phase19-render.ps1                    # Single GPU, HD
#   .\scripts\phase19-render.ps1 -Quality max       # Max quality
#   .\scripts\phase19-render.ps1 -Parallel          # Use all 3 GPUs
param(
    [ValidateSet("hd", "max")]
    [string]$Quality = "hd",
    [switch]$Parallel
)
if ($Parallel) {
    & "$PSScriptRoot\render-parallel-3gpu.ps1" -From 901 -To 950 -Quality $Quality
} else {
    & "$PSScriptRoot\render-all-long-videos.ps1" -From 901 -To 950 -Quality $Quality -Concurrency 100
}
