# Phase 15 Render: Videos 701-750
# Usage:
#   .\scripts\phase15-render.ps1                # HD quality
#   .\scripts\phase15-render.ps1 -Quality max   # Max quality
param(
    [ValidateSet("hd", "max")]
    [string]$Quality = "hd"
)
& "$PSScriptRoot\render-all-long-videos.ps1" -From 701 -To 750 -Quality $Quality
