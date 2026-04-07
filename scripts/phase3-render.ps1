# Phase 3 Render: Videos 101-150 (High Quality)
# Usage: .\scripts\phase3-render.ps1
#        .\scripts\phase3-render.ps1 -Quality max
param(
    [ValidateSet("hd", "max")]
    [string]$Quality = "hd"
)
& "$PSScriptRoot\render-all-long-videos.ps1" -From 101 -To 150 -Quality $Quality
