# Phase 3 Render: Videos 101-150
# Usage:
#   .\scripts\phase3-render.ps1                # HD quality
#   .\scripts\phase3-render.ps1 -Quality max   # Max quality
param(
    [ValidateSet("hd", "max")]
    [string]$Quality = "hd"
)
& "$PSScriptRoot\render-all-long-videos.ps1" -From 101 -To 150 -Quality $Quality
