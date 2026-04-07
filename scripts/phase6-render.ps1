# ============================================================================
# Phase 6 Render: Videos 251-300 (High Quality)
# ============================================================================
# Usage: .\scripts\phase6-render.ps1
#        .\scripts\phase6-render.ps1 -Quality max
param(
    [ValidateSet("hd", "max")]
    [string]$Quality = "hd"
)
& "$PSScriptRoot\render-all-long-videos.ps1" -From 251 -To 300 -Quality $Quality
