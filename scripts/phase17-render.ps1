# Phase 17 Render: Videos 801-850 (High Quality)
# Usage: .\scripts\phase17-render.ps1
#        .\scripts\phase17-render.ps1 -Quality max
param(
    [ValidateSet("hd", "max")]
    [string]$Quality = "hd"
)
& "$PSScriptRoot\render-all-long-videos.ps1" -From 801 -To 850 -Quality $Quality
