# Phase 2 Render: Videos 51-100 (High Quality)
# Usage: .\scripts\phase2-render.ps1
#        .\scripts\phase2-render.ps1 -Quality max
param(
    [ValidateSet("hd", "max")]
    [string]$Quality = "hd"
)
& "$PSScriptRoot\render-all-long-videos.ps1" -From 51 -To 100 -Quality $Quality
