from sqlmodel import Field, SQLModel


class Plant(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    name: str = Field(index=True)
    min_temperature: int = Field(index=True)
    max_temperature: int = Field(index=True)
    min_humidity: int = Field(index=True)
    max_humidity: int = Field(index=True)
