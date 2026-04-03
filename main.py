from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

app = FastAPI(title="ШТЕУД")


app.mount("/", StaticFiles(directory="frontend/out", html=True), name="static")

@app.post("/api/profile/edit")
def update_profile(payload: dict, new_payload: dict):
    return {
        "status": 200,
        "updated_profile": {
            "nickname": new_payload["nickname"],
            "email": new_payload["email"],
            "photo": new_payload["photo"]
        }
    }