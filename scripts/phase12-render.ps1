# Phase 12 Render: Videos 551-600
# Usage:
#   .\scripts\phase12-render.ps1                # HD quality
#   .\scripts\phase12-render.ps1 -Quality max   # Max quality
param(
    [ValidateSet("hd", "max")]
    [string]$Quality = "hd"
)
& "$PSScriptRoot\render-all-long-videos.ps1" -From 551 -To 600 -Quality $Quality
