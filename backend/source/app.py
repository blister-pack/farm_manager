from fastapi import FastAPI, Path


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


@app.get("/plant/{plant_id}")
def get_plant(plant_id: int = Path(gt=0)):
    return plants[plant_id]
