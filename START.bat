@echo off
title Leo Bruni Photography — Lokaler Server
cd /d "D:\CODE - CLAUDE 2026\leo-bruni-photography"

echo.
echo  ================================================
echo   Leo Bruni Photography — Lokaler Vorschau-Server
echo  ================================================
echo.

:: Pruefe ob node_modules vorhanden
if not exist "node_modules\" (
    echo  Erstmalige Installation der Pakete...
    echo  (nur beim ersten Start, dauert ~1 Minute)
    echo.
    call npm install
    echo.
)

echo  Server startet...
echo  Browser oeffnet sich automatisch auf http://localhost:3000
echo.
echo  Zum Beenden: dieses Fenster schliessen oder STRG+C druecken
echo.

:: Browser nach 4 Sekunden oeffnen
start /b cmd /c "timeout /t 4 /nobreak >nul && start http://localhost:3000"

:: Dev-Server starten
npm run dev
