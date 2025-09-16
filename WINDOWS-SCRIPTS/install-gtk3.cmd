@echo off
REM Script to download and install GTK3 Runtime on Windows

set "URL=https://github.com/tschoonj/GTK-for-Windows-Runtime-Environment-Installer/releases/download/2022-01-04/gtk3-runtime-3.24.31-2022-01-04-ts-win64.exe"
set "DEST=%USERPROFILE%\Downloads\gtk3-runtime.exe"

echo Downloading GTK3 Runtime...
powershell -Command "Invoke-WebRequest -Uri '%URL%' -OutFile '%DEST%'"

if exist "%DEST%" (
    echo Download completed: %DEST%
    echo Installing GTK3 Runtime...
    "%DEST%" /SILENT /NORESTART
    echo Installation finished.
) else (
    echo Error: Failed to download the file.
)

pause
exit /b
