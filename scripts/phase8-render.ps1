# Phase 8 Render: Videos 351-400 (High Quality)
# Usage: .\scripts\phase8-render.ps1
#        .\scripts\phase8-render.ps1 -Quality max
param(
    [ValidateSet("hd", "max")]
    [string]$Quality = "hd"
)
& "$PSScriptRoot\render-all-long-videos.ps1" -From 351 -To 400 -Quality $Quality
