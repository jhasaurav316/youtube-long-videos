# Phase 19 Render: Videos 901-950 (High Quality)
# Usage: .\scripts\phase19-render.ps1
#        .\scripts\phase19-render.ps1 -Quality max
param(
    [ValidateSet("hd", "max")]
    [string]$Quality = "hd"
)
& "$PSScriptRoot\render-all-long-videos.ps1" -From 901 -To 950 -Quality $Quality
