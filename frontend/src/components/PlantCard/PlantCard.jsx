import React from "react";
import getPlants from "../../hooks/getPlants";

function PlantCard({
  onPlantIdChange,
  plantIdOptions = [1, 2],
  selectedOption = 1,
}) {
  const plantInfo = getPlants(plantId);

  return (
    <div className="bg-green-300">
      <select
        name="plantIdDropdown"
        id="plantIdDropdown"
        value={selectedOption}
        onChange={(e) => {onPlantIdChange && onPlantIdChange(e.target.value)}}>
        <option value="1">1 - Cherry Tomatoes</option>
        <option value="2">2 - Lettuce</option>
      </select>
      <p>Tomatoes</p>
      <p>Ideal Temp: 20.C - 35.C</p>
      <p>Ideal Humidity: 30% - 65%</p>
    </div>
  );
}

export default PlantCard;
