@echo off
REM Script to download and install Python 3.13 on Windows

REM Define Python download URL and destination path
set "URL=https://www.python.org/ftp/python/3.13.0/python-3.13.0-amd64.exe"
set "DEST=%USERPROFILE%\Downloads\python-installer.exe"

echo Downloading Python 3.13...
powershell -Command "Invoke-WebRequest -Uri '%URL%' -OutFile '%DEST%'"

REM Check if the download was successful
if exist "%DEST%" (
    echo Download completed: %DEST%
    echo Installing Python 3.13 silently...
    
    REM Silent installation with Add to PATH
    "%DEST%" /quiet InstallAllUsers=1 PrependPath=1 Include_test=0
    
    if %ERRORLEVEL% EQU 0 (
        echo ✅ Python installation finished successfully.
    ) else (
        echo ❌ Python installation failed with error code %ERRORLEVEL%.
    )
) else (
    echo ❌ Error: Failed to download Python installer.
)

pause
exit /b
