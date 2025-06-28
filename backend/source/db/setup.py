from sqlmodel import SQLModel
from .session import engine
from source.models.plant import Plant


def create_db_and_tables():
    SQLModel.metadata.create_all(engine)
