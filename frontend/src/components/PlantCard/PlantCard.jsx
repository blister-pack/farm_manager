import React, { useId } from "react";
import usePlant from "../../hooks/usePlant";

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
      <div>
        <p>{plantData ? plantData.name : "Loading..."}</p>
        <p>{plantData ? `Ideal temperature: ${plantData.ideal_temperature[0]} - ${plantData.ideal_temperature[1]} °C` : "Loading..."}</p>
        <p>{plantData ? `Ideal humidity: ${plantData.ideal_humidity[0]} - ${plantData.ideal_humidity[1]}%` : "Loading..."}</p>
      </div>
    </div>
  );
}

export default PlantCard;
