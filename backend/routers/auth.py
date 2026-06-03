from fastapi import FastAPI, Depends, HTTPException, APIRouter
from sqlalchemy.orm import Session
from dependencies.db import SessionLocal, get_db
from models import user as models
from authutilities import auth
from schemas.user import UserCreate


router = APIRouter()


# Signup
@router.post("/signup")
def signup(user:UserCreate, db: Session = Depends(get_db)):
    
    existing_user = db.query(models.User).filter(models.User.email == user.email).first()
        
    if existing_user:
        raise HTTPException(status_code=400, detail="User exists")

    new_user = models.User(
            email=user.email,
            password=auth.hash_password(user.password)
        )

    db.add(new_user)
    db.commit()

    return {"message": "User created"}



# Login
@router.post("/login")
def login(user:UserCreate, db: Session = Depends(get_db)):
    
    existing_user = db.query(models.User).filter(models.User.email == user.email).first()

    if not existing_user or not auth.verify_password(user.password, existing_user.password):
        raise HTTPException(status_code=401, detail="Invalid")

    return {"message": "Login success"}


@router.get("/users")
def get_users(db: Session = Depends(get_db)):
    users = db.query(models.User).all()
    return users
