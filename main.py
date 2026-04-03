from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

app = FastAPI(title="ШТЕУД")


app.mount("/", StaticFiles(directory="frontend/out", html=True), name="static")

@app.post("/api/profile/edit")
async def update_profile(payload: dict):
    """
    Входные данные:
    {
        "current_profile": {
            "nickname": "string",
            "email": "string",
            "password_hash": "string"
        },
        "new_profile": {
            "nickname": "string",
            "email": "string",
            "password_hash": "string",
            "photo_base64": "string"
        }
    }

    Выходные данные:
    403 - В случае если данные не валидные
    200 - В случае успеха 
    """    
    
    return {
        "status": 200,
        "updated_profile": {
            "nickname": "new_name",
            "email": "new_email",
            "message": "edited info",
            "photo": "new_photo"
        }
    }