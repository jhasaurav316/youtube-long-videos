# Phase 16 Render: Videos 751-800 (High Quality)
# Usage: .\scripts\phase16-render.ps1
#        .\scripts\phase16-render.ps1 -Quality max
param(
    [ValidateSet("hd", "max")]
    [string]$Quality = "hd"
)
& "$PSScriptRoot\render-all-long-videos.ps1" -From 751 -To 800 -Quality $Quality
