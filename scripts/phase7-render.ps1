# Phase 7 Render: Videos 301-350
# Usage:
#   .\scripts\phase7-render.ps1                # HD quality
#   .\scripts\phase7-render.ps1 -Quality max   # Max quality
param(
    [ValidateSet("hd", "max")]
    [string]$Quality = "hd"
)
& "$PSScriptRoot\render-all-long-videos.ps1" -From 301 -To 350 -Quality $Quality
