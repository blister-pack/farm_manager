import React, { useId } from "react";

function PlantCard({
  label,
  onPlantIdChange,
  plantIdOptions = [],
  selectedOption = 1,
  plantData,
}) {
  const id = useId();
  return (
    <div className="bg-green-300 h-50">
      <label htmlFor={id}>{label}</label>
      <select
        name="plantIdDropdown"
        id={id}
        value={selectedOption}
        onChange={(e) => {
          onPlantIdChange && onPlantIdChange(e.target.value);
        }}
      >
        {plantIdOptions.map((plant) => (
          <option key={plant.id} value={plant.id}>
            {plant.name}
          </option>
        ))}
      </select>
      <div>
        <p>{plantData ? plantData.name : "Loading..."}</p>
        <p>
          {plantData
            ? `Ideal temperature: ${plantData.min_temperature} °C - ${plantData.max_temperature} °C`
            : "Loading..."}
        </p>
        <p>
          {plantData
            ? `Ideal humidity: ${plantData.min_humidity}% - ${plantData.max_humidity}%`
            : "Loading..."}
        </p>
      </div>
    </div>
  );
}

export default PlantCard;
