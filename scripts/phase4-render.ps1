# Phase 4 Render: Videos 151-200 (High Quality)
# Usage: .\scripts\phase4-render.ps1
#        .\scripts\phase4-render.ps1 -Quality max
param(
    [ValidateSet("hd", "max")]
    [string]$Quality = "hd"
)
& "$PSScriptRoot\render-all-long-videos.ps1" -From 151 -To 200 -Quality $Quality
