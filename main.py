from fastapi import FastAPI, HTTPException, status, Body 
from fastapi.staticfiles import StaticFiles
from database.database import db

app = FastAPI(title="ШТЕУД")

# ==== USERS ====

@app.post("/api/profile/edit")
def update_profile(
    email: str, 
    password: str, 
    new_login: str = None, 
    new_photo: str = None, 
    new_email: str = None, 
    new_password: str = None
):
    user = db.authenticate(email, password)
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials")
    
    db.update_user(email, new_login, new_photo, new_email, new_password)
    return {"status": "updated"}

@app.post("/api/profile/register", status_code=status.HTTP_201_CREATED)
def register_profile(email: str, password: str, login: str):
    user_id = db.register(email, password, login)
    return {"id": user_id}

@app.post("/api/profile/login")
def login_profile(email: str, password: str):
    user = db.authenticate(email, password)
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials")
    
    return {"status": "ok"}

@app.get("/api/profile/stats")
def get_profile_stats(login: str):
    stats = db.get_user_stats(login)
    if not stats:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
    
    return {
        "user": {
            "login": stats["Login"],
            "photo": stats["Image"],
            "league": stats.get("league") or "Bronze"
        },
        "performance": {
            "score": stats.get("score") or 0,
            "tasks_opened": stats["Gotten Tasks"],
            "total_attempts": stats["total_tries"],
            "successful_attempts": stats["success_tries"],
            "winrate": f"{stats['winrate']}%"
        }
    }

# ==== MODULES ====

@app.post("/api/modules")
def get_modules(start: int, count: int):
    return db.get_tasks_range(start, count)

@app.get("/api/module/{module_id}")
def get_module(module_id: int):
    module = db.get_task_by_id(module_id)
    if not module:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Module not found")
    
    return module

@app.post("/api/moduleadd")
def add_module(title: str, description: str, image: str = None):
    task_id = db.add_task(title, description, image)
    if not task_id:
        raise HTTPException(status_code=500, detail="Failed to add module")
    
    return {"status": "success", "module_id": task_id}

@app.post("/api/moduledel")
def del_module(module_id: int):
    success = db.delete_task(module_id)
    if not success:
        raise HTTPException(status_code=404, detail="Module not found or already deleted")
    
    return {"status": "deleted", "module_id": module_id}

@app.post("/api/report/{module_id}")
def submit_report(
    email: str, 
    password: str, 
    module_id: int,
    answers: list = Body(...) 
):
    user = db.authenticate(email, password)
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials")
    
    db.save_report(email, module_id, answers)
    return {"status": "saved"}


@app.on_event("startup")
def startup_event():
    db.init_db("./database/script.sql")

# app.mount("/", StaticFiles(directory="frontend/out", html=True), name="static")