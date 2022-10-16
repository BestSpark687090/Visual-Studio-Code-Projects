@echo off
node maybe.js compile test.bjs
if %ERRORLEVEL% NEQ 0 ( pause )
echo [32mInterpreted code:[0m
node maybe.js interpret
@echo on