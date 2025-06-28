from fastapi.middleware.cors import CORSMiddleware
from source.db.setup import create_db_and_tables
from contextlib import asynccontextmanager
from fastapi import FastAPI


@asynccontextmanager
async def lifespan(app: FastAPI):
    create_db_and_tables()
    print("DB and tables created")
    yield
    print("Shutting down")


origins = ["http://localhost:5173"]

def setup_cors(app: FastAPI)
    app.add_middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )