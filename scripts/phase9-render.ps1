# Phase 9 Render: Videos 401-450
# Usage:
#   .\scripts\phase9-render.ps1                # HD quality
#   .\scripts\phase9-render.ps1 -Quality max   # Max quality
param(
    [ValidateSet("hd", "max")]
    [string]$Quality = "hd"
)
& "$PSScriptRoot\render-all-long-videos.ps1" -From 401 -To 450 -Quality $Quality
