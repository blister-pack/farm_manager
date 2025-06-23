import React, { useId } from "react";
import getPlants from "../../hooks/getPlants";

function PlantCard({
  label,
  onPlantIdChange,
  plantIdOptions = [],
  selectedOption = 1,
  plantData,
}) {
  const id = useId();
  return (
    <div className="bg-green-300 h-400">
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
          <option key={plant} value={plant}>
            {plant}
          </option>
        ))}
      </select>
      <p>{plantData }</p>
    </div>
  );
}

export default PlantCard;
