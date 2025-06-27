import array
from sqlalchemy import table, true
import uvicorn
from fastapi import FastAPI, Path, Depends, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from sqlmodel import Field, Session, SQLModel, create_engine, select
from typing import Annotated
from contextlib import asynccontextmanager

# ---------------------------------------------------#
"""
DB STUFF
"""


class Plant(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    name: str = Field(index=True)
    min_temperature: int = Field(index=True)
    max_temperature: int = Field(index=True)
    min_humidity: int = Field(index=True)
    max_humidity: int = Field(index=True)


sqlite_file_name = "database.db"
sqlite_url = f"sqlite:///{sqlite_file_name}"

connect_args = {"check_same_thread": False}
engine = create_engine(sqlite_url, connect_args=connect_args)


def create_db_and_tables():
    SQLModel.metadata.create_all(engine)


def get_session():
    with Session(engine) as session:
        yield session


SessionDep = Annotated[Session, Depends(get_session)]

@asynccontextmanager
async def lifespan(app: FastAPI):
    create_db_and_tables()
    print("DB and tables created")
    yield
    print("Shutting down")

# ------------------------------------------------------------#

app = FastAPI(lifespan=lifespan)

plants = {
    1: {
        "name": "cherry tomatoes",
        "ideal_temperature": [10, 35],
        "ideal_humidity": [30, 60],
    },
    2: {
        "name": "lettuce",
        "ideal_temperature": [5, 30],
        "ideal_humidity": [30, 70],
    },
}

origins = ["http://localhost:5173"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/plants")
def get_plant():
    return plants


@app.get("/plant/{plant_id}")
def get_plant(plant_id: int = Path(gt=0)):
    return plants[plant_id]


if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)
