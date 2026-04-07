# Phase 20 Render: Videos 951-1000 (High Quality)
# Usage: .\scripts\phase20-render.ps1
#        .\scripts\phase20-render.ps1 -Quality max
param(
    [ValidateSet("hd", "max")]
    [string]$Quality = "hd"
)
& "$PSScriptRoot\render-all-long-videos.ps1" -From 951 -To 1000 -Quality $Quality
