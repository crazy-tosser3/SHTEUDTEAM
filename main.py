from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

app = FastAPI()


app.mount("/", StaticFiles(directory="frontend/out", html=True), name="static")

