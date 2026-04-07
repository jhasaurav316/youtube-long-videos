# Phase 15 Render: Videos 701-750 (High Quality)
# Usage: .\scripts\phase15-render.ps1
#        .\scripts\phase15-render.ps1 -Quality max
param(
    [ValidateSet("hd", "max")]
    [string]$Quality = "hd"
)
& "$PSScriptRoot\render-all-long-videos.ps1" -From 701 -To 750 -Quality $Quality
