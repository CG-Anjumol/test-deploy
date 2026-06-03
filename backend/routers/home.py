from fastapi import FastAPI, Depends, HTTPException, APIRouter
from sqlalchemy.orm import Session
from db.database import SessionLocal,  SessionLocal, Base, engine
from models import user as models
from authutilities import auth


router = APIRouter()
# Home API
@router.get("/home")
def home():
    return {"message": "Welcome Home"}
