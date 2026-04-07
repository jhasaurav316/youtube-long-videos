# ============================================================================
# Phase 1 Render: Videos 1-50 (High Quality)
# ============================================================================
# Usage: .\scripts\phase1-render.ps1
#        .\scripts\phase1-render.ps1 -Quality max
param(
    [ValidateSet("hd", "max")]
    [string]$Quality = "hd"
)
& "$PSScriptRoot\render-all-long-videos.ps1" -From 1 -To 50 -Quality $Quality
