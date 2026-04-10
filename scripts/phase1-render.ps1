# Phase 1 Render: Videos 1-50
# Usage:
#   .\scripts\phase1-render.ps1                # HD quality
#   .\scripts\phase1-render.ps1 -Quality max   # Max quality
param(
    [ValidateSet("hd", "max")]
    [string]$Quality = "hd"
)
& "$PSScriptRoot\render-all-long-videos.ps1" -From 1 -To 50 -Quality $Quality
