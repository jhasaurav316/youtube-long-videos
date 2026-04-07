# Phase 5 Render: Videos 201-250 (High Quality)
# Usage: .\scripts\phase5-render.ps1
#        .\scripts\phase5-render.ps1 -Quality max
param(
    [ValidateSet("hd", "max")]
    [string]$Quality = "hd"
)
& "$PSScriptRoot\render-all-long-videos.ps1" -From 201 -To 250 -Quality $Quality
