import uvicorn
from fastapi import FastAPI
from source.api import plant_routes
from source.core.config import lifespan, setup_cors

app = FastAPI(lifespan=lifespan)

setup_cors(app)

app.include_router(plant_routes.router)

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)
