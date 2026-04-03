from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import Response

app = FastAPI(title="ШТЕУД")

@app.post("/api/profile/edit")
def update_profile(email: str, password: str, emailNew: str = None, passwordNew: str = None, loginNew: str = None, photoNew: str = None):
    return Response(
        status_code=200,
        content={
            "login": loginNew,
            "email": emailNew,
            "password": passwordNew,
            "photo": photoNew
        }
    )

@app.get("/api/profile/stats")
def statistic_profile():
    return {
        "status" : "status",
        "gotten_task": "gotten_task",
        "try": "try"
    }

app.mount("/", StaticFiles(directory="frontend/out", html=True), name="static")

