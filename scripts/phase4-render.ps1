# Phase 4 Render: Videos 151-200
# Usage:
#   .\scripts\phase4-render.ps1                # HD quality
#   .\scripts\phase4-render.ps1 -Quality max   # Max quality
param(
    [ValidateSet("hd", "max")]
    [string]$Quality = "hd"
)
& "$PSScriptRoot\render-all-long-videos.ps1" -From 151 -To 200 -Quality $Quality
