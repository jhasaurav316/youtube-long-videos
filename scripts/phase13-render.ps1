# Phase 13 Render: Videos 601-650
# Usage:
#   .\scripts\phase13-render.ps1                # HD quality
#   .\scripts\phase13-render.ps1 -Quality max   # Max quality
param(
    [ValidateSet("hd", "max")]
    [string]$Quality = "hd"
)
& "$PSScriptRoot\render-all-long-videos.ps1" -From 601 -To 650 -Quality $Quality
