# Phase 13 Render: Videos 601-650 (High Quality)
# Usage: .\scripts\phase13-render.ps1
#        .\scripts\phase13-render.ps1 -Quality max
param(
    [ValidateSet("hd", "max")]
    [string]$Quality = "hd"
)
& "$PSScriptRoot\render-all-long-videos.ps1" -From 601 -To 650 -Quality $Quality
