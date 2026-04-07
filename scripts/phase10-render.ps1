# Phase 10 Render: Videos 451-500 (High Quality)
# Usage: .\scripts\phase10-render.ps1
#        .\scripts\phase10-render.ps1 -Quality max
param(
    [ValidateSet("hd", "max")]
    [string]$Quality = "hd"
)
& "$PSScriptRoot\render-all-long-videos.ps1" -From 451 -To 500 -Quality $Quality
