# Phase 6 Render: Videos 251-300
# Usage:
#   .\scripts\phase6-render.ps1                # HD quality
#   .\scripts\phase6-render.ps1 -Quality max   # Max quality
param(
    [ValidateSet("hd", "max")]
    [string]$Quality = "hd"
)
& "$PSScriptRoot\render-all-long-videos.ps1" -From 251 -To 300 -Quality $Quality
