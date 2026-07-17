@echo off
title Shiori Website Local Server
echo ==============================================
echo   Starting Shiori Local Server (Clean URLs)
echo   Open: http://localhost:8000/
echo   To stop, close this window or press Ctrl+C
echo ==============================================
echo.
python server.py
if %ERRORLEVEL% neq 0 (
    echo.
    echo [ERROR] Failed to start server. Make sure Python is installed and added to your PATH.
    pause
)
