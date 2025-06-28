from sys import api_version
from fastapi import APIRouter, Path, HTTPException
from sqlmodel import select
from source.models.plant import Plant
from source.db.session import SessionDep

router = APIRouter()


@router.post("/create_plant")
def create_plant(plant: Plant, session: SessionDep) -> Plant:
    session.add(plant)
    session.commit()
    session.refresh(plant)
    return plant


@router.get("/plants")
def get_plants(
    session: SessionDep,
    offset: int = 0,
    limit: int = 0,
) -> list[Plant]:
    plants = session.exec(select(Plant).offset(offset).limit(limit)).all()
    return plants


@router.get("/plant/{plant_id}")
def get_plant(session: SessionDep, plant_id: int = Path(gt=0)) -> Plant:
    plant = session.get(Plant, plant_id)
    if not plant:
        raise HTTPException(status_code=404, detail="Plant not found")
    return plant


@router.delete("/delete_plant/{plant_id}")
def delete_plant(session: SessionDep, plant_id: int = Path(gt=0)):
    plant = session.get(Plant, plant_id)
    if not plant:
        raise HTTPException(status_code=404, detail="Hero not found")
    session.delete(plant)
    session.commit()
    return {"ok": True}