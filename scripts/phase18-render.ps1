# Phase 18 Render: Videos 851-900 (High Quality)
# Usage: .\scripts\phase18-render.ps1
#        .\scripts\phase18-render.ps1 -Quality max
param(
    [ValidateSet("hd", "max")]
    [string]$Quality = "hd"
)
& "$PSScriptRoot\render-all-long-videos.ps1" -From 851 -To 900 -Quality $Quality
