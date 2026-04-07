# Phase 14 Render: Videos 651-700 (High Quality)
# Usage: .\scripts\phase14-render.ps1
#        .\scripts\phase14-render.ps1 -Quality max
param(
    [ValidateSet("hd", "max")]
    [string]$Quality = "hd"
)
& "$PSScriptRoot\render-all-long-videos.ps1" -From 651 -To 700 -Quality $Quality
