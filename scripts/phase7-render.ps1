# Phase 7 Render: Videos 301-350
# Usage:
#   .\scripts\phase7-render.ps1                    # Single GPU, HD
#   .\scripts\phase7-render.ps1 -Quality max       # Max quality
#   .\scripts\phase7-render.ps1 -Parallel          # Use all 3 GPUs
param(
    [ValidateSet("hd", "max")]
    [string]$Quality = "hd",
    [switch]$Parallel
)
if ($Parallel) {
    & "$PSScriptRoot\render-parallel-3gpu.ps1" -From 301 -To 350 -Quality $Quality
} else {
    & "$PSScriptRoot\render-all-long-videos.ps1" -From 301 -To 350 -Quality $Quality -Concurrency 100
}
