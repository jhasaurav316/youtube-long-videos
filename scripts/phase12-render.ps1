# Phase 12 Render: Videos 551-600 (High Quality)
# Usage: .\scripts\phase12-render.ps1
#        .\scripts\phase12-render.ps1 -Quality max
param(
    [ValidateSet("hd", "max")]
    [string]$Quality = "hd"
)
& "$PSScriptRoot\render-all-long-videos.ps1" -From 551 -To 600 -Quality $Quality
