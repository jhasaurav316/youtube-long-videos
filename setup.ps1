# ============================================================================
# AUTO SETUP - YouTube Video Factory
# ============================================================================
# Run this in PowerShell as Administrator:
#   Set-ExecutionPolicy Bypass -Scope Process -Force; .\setup.ps1
# ============================================================================

Write-Host ""
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host "  YouTube Video Factory - Auto Setup" -ForegroundColor Cyan
Write-Host "  Intel Ultra 7 155H | 48GB RAM" -ForegroundColor Cyan
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host ""

$ErrorActionPreference = "Continue"
$failed = @()

# ---------- 1. Node.js ----------
Write-Host "  [1/5] Checking Node.js..." -ForegroundColor Yellow
$nodeInstalled = Get-Command node -ErrorAction SilentlyContinue
if ($nodeInstalled) {
    $nodeVersion = node --version
    Write-Host "    ✅ Node.js already installed ($nodeVersion)" -ForegroundColor Green
} else {
    Write-Host "    Installing Node.js..." -ForegroundColor Gray
    try {
        winget install OpenJS.NodeJS.LTS --accept-source-agreements --accept-package-agreements -e
        Write-Host "    ✅ Node.js installed" -ForegroundColor Green
    } catch {
        $failed += "Node.js"
        Write-Host "    ❌ Failed. Install manually from https://nodejs.org" -ForegroundColor Red
    }
}

# ---------- 2. Git ----------
Write-Host "  [2/5] Checking Git..." -ForegroundColor Yellow
$gitInstalled = Get-Command git -ErrorAction SilentlyContinue
if ($gitInstalled) {
    $gitVersion = git --version
    Write-Host "    ✅ Git already installed ($gitVersion)" -ForegroundColor Green
} else {
    Write-Host "    Installing Git..." -ForegroundColor Gray
    try {
        winget install Git.Git --accept-source-agreements --accept-package-agreements -e
        Write-Host "    ✅ Git installed" -ForegroundColor Green
    } catch {
        $failed += "Git"
        Write-Host "    ❌ Failed. Install manually from https://git-scm.com" -ForegroundColor Red
    }
}

# ---------- 3. Python + edge-tts ----------
Write-Host "  [3/5] Checking Python + edge-tts..." -ForegroundColor Yellow
$pythonInstalled = Get-Command python -ErrorAction SilentlyContinue
if ($pythonInstalled) {
    $pyVersion = python --version
    Write-Host "    ✅ Python already installed ($pyVersion)" -ForegroundColor Green
} else {
    Write-Host "    Installing Python..." -ForegroundColor Gray
    try {
        winget install Python.Python.3.12 --accept-source-agreements --accept-package-agreements -e
        Write-Host "    ✅ Python installed" -ForegroundColor Green
    } catch {
        $failed += "Python"
        Write-Host "    ❌ Failed. Install manually from https://python.org" -ForegroundColor Red
    }
}

# Refresh PATH so pip is available
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

$edgeTtsInstalled = Get-Command edge-tts -ErrorAction SilentlyContinue
if ($edgeTtsInstalled) {
    Write-Host "    ✅ edge-tts already installed" -ForegroundColor Green
} else {
    Write-Host "    Installing edge-tts..." -ForegroundColor Gray
    try {
        pip install edge-tts 2>&1 | Out-Null
        Write-Host "    ✅ edge-tts installed" -ForegroundColor Green
    } catch {
        $failed += "edge-tts"
        Write-Host "    ❌ Failed. Run manually: pip install edge-tts" -ForegroundColor Red
    }
}

# ---------- 4. FFmpeg ----------
Write-Host "  [4/5] Checking FFmpeg..." -ForegroundColor Yellow
$ffmpegInstalled = Get-Command ffmpeg -ErrorAction SilentlyContinue
if ($ffmpegInstalled) {
    Write-Host "    ✅ FFmpeg already installed" -ForegroundColor Green
} else {
    Write-Host "    Installing FFmpeg..." -ForegroundColor Gray
    try {
        winget install Gyan.FFmpeg --accept-source-agreements --accept-package-agreements -e
        Write-Host "    ✅ FFmpeg installed" -ForegroundColor Green
    } catch {
        $failed += "FFmpeg"
        Write-Host "    ❌ Failed. Install manually from https://ffmpeg.org" -ForegroundColor Red
    }
}

# ---------- 5. npm install ----------
Write-Host "  [5/5] Installing project dependencies..." -ForegroundColor Yellow

# Refresh PATH again
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

$projectDir = $PSScriptRoot
Set-Location $projectDir

$npmInstalled = Get-Command npm -ErrorAction SilentlyContinue
if ($npmInstalled) {
    npm install 2>&1 | Out-Null
    Write-Host "    ✅ Project dependencies installed" -ForegroundColor Green
} else {
    $failed += "npm install"
    Write-Host "    ❌ npm not found. Restart PowerShell and run: npm install" -ForegroundColor Red
}

# ---------- Summary ----------
Write-Host ""
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host "  SETUP COMPLETE" -ForegroundColor Cyan
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host ""

if ($failed.Count -gt 0) {
    Write-Host "  ⚠️  Some items need manual install:" -ForegroundColor Yellow
    foreach ($item in $failed) {
        Write-Host "    - $item" -ForegroundColor Red
    }
    Write-Host ""
    Write-Host "  After fixing, restart PowerShell and run:" -ForegroundColor White
    Write-Host "    cd $projectDir" -ForegroundColor White
    Write-Host "    npm install" -ForegroundColor White
} else {
    Write-Host "  ✅ Everything installed!" -ForegroundColor Green
}

Write-Host ""
Write-Host "  NEXT STEPS:" -ForegroundColor Yellow
Write-Host "    1. Restart PowerShell (so PATH updates take effect)" -ForegroundColor White
Write-Host "    2. cd $projectDir" -ForegroundColor White
Write-Host "    3. .\scripts\phase1-audio.ps1" -ForegroundColor White
Write-Host "    4. .\scripts\phase1-render.ps1" -ForegroundColor White
Write-Host ""
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host ""
