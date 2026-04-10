# Phase 5 Render: Videos 201-250
# Usage:
#   .\scripts\phase5-render.ps1                # HD quality
#   .\scripts\phase5-render.ps1 -Quality max   # Max quality
param(
    [ValidateSet("hd", "max")]
    [string]$Quality = "hd"
)
& "$PSScriptRoot\render-all-long-videos.ps1" -From 201 -To 250 -Quality $Quality
