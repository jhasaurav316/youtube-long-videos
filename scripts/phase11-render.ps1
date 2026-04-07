# Phase 11 Render: Videos 501-550 (High Quality)
# Usage: .\scripts\phase11-render.ps1
#        .\scripts\phase11-render.ps1 -Quality max
param(
    [ValidateSet("hd", "max")]
    [string]$Quality = "hd"
)
& "$PSScriptRoot\render-all-long-videos.ps1" -From 501 -To 550 -Quality $Quality
