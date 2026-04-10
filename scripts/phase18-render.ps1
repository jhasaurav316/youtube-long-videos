# Phase 18 Render: Videos 851-900
# Usage:
#   .\scripts\phase18-render.ps1                # HD quality
#   .\scripts\phase18-render.ps1 -Quality max   # Max quality
param(
    [ValidateSet("hd", "max")]
    [string]$Quality = "hd"
)
& "$PSScriptRoot\render-all-long-videos.ps1" -From 851 -To 900 -Quality $Quality
