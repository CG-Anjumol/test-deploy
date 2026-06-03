@echo off

echo Starting Backend...

cd backend
start "Backend" cmd /k uvicorn main:app --host 0.0.0.0 --port 8001

echo Starting Frontend...

cd ../frontend
start "Frontend" cmd /k npx serve -s build -l 3000

echo Application started!
pause