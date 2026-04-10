# Phase 11 Render: Videos 501-550
# Usage:
#   .\scripts\phase11-render.ps1                # HD quality
#   .\scripts\phase11-render.ps1 -Quality max   # Max quality
param(
    [ValidateSet("hd", "max")]
    [string]$Quality = "hd"
)
& "$PSScriptRoot\render-all-long-videos.ps1" -From 501 -To 550 -Quality $Quality
