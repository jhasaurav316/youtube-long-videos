# Phase 17 Render: Videos 801-850
# Usage:
#   .\scripts\phase17-render.ps1                # HD quality
#   .\scripts\phase17-render.ps1 -Quality max   # Max quality
param(
    [ValidateSet("hd", "max")]
    [string]$Quality = "hd"
)
& "$PSScriptRoot\render-all-long-videos.ps1" -From 801 -To 850 -Quality $Quality
