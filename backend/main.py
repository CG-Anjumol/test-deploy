
from fastapi import FastAPI
from db.database import engine, Base
from fastapi.middleware.cors import CORSMiddleware
# Import routers
from routers.auth import router as auth_router
from routers.home import router as home_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=True,
)
# Create tables
Base.metadata.create_all(bind=engine)
app.include_router(auth_router)
app.include_router(home_router)
