# Phase 10 Render: Videos 451-500
# Usage:
#   .\scripts\phase10-render.ps1                # HD quality
#   .\scripts\phase10-render.ps1 -Quality max   # Max quality
param(
    [ValidateSet("hd", "max")]
    [string]$Quality = "hd"
)
& "$PSScriptRoot\render-all-long-videos.ps1" -From 451 -To 500 -Quality $Quality
