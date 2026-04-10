# Phase 8 Render: Videos 351-400
# Usage:
#   .\scripts\phase8-render.ps1                # HD quality
#   .\scripts\phase8-render.ps1 -Quality max   # Max quality
param(
    [ValidateSet("hd", "max")]
    [string]$Quality = "hd"
)
& "$PSScriptRoot\render-all-long-videos.ps1" -From 351 -To 400 -Quality $Quality
