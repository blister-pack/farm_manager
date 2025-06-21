import uvicorn
from fastapi import FastAPI, Path
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel


app = FastAPI()

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

origins = ["http://localhost:5173/"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/plant/{plant_id}")
def get_plant(plant_id: int = Path(gt=0)):
    return plants[plant_id]


if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)
