# Phase 19 Render: Videos 901-950
# Usage:
#   .\scripts\phase19-render.ps1                # HD quality
#   .\scripts\phase19-render.ps1 -Quality max   # Max quality
param(
    [ValidateSet("hd", "max")]
    [string]$Quality = "hd"
)
& "$PSScriptRoot\render-all-long-videos.ps1" -From 901 -To 950 -Quality $Quality
