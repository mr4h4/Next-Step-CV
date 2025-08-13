@echo off
setlocal

REM === 1. Check if Python is installed ===
where python >nul 2>&1
if %errorlevel% neq 0 (
    echo Python is not installed. Please install Python 3 to continue.
    goto end
)

REM === 2. Create venv if it doesn't exist ===
if not exist venv (
    echo Creating virtual environment...
    python -m venv venv
    if %errorlevel% neq 0 (
        echo Failed to create virtual environment.
        goto end
    )
)

REM === 3. Activate venv ===
call venv\Scripts\activate.bat
if %errorlevel% neq 0 (
    echo Failed to activate virtual environment.
    goto end
)

REM === 4. Install dependencies ===
if exist requirements.txt (
    echo Installing dependencies...
    pip install --upgrade pip
    pip install -r requirements.txt
    if %errorlevel% neq 0 (
        echo Failed to install required packages. Please check your environment.
        goto end
    )
) else (
    echo No requirements.txt found. Skipping dependency installation.
)

REM === 5. Run the application ===
echo Running application...
python .\nextStep-cv\backend\main.py
if %errorlevel% neq 0 (
    echo Application exited with an error.
    goto end
)

:end
pause
