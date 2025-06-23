import React, { useState } from "react";
import PlantCard from "../../components/PlantCard/PlantCard";
import getPlants from "../../hooks/getPlants";
import getAllPlants from "../../hooks/getAllPlants";

function MyPlants() {
  const [plantId, setPlantId] = useState(1);

  const plantInfo = getAllPlants();
  const options = Object.keys(plantInfo);
  const plantData = getPlants(plantId);

  return (
    <div>
      Here you can see all your plants
      <PlantCard
        label="Selected Plant"
        plantIdOptions={options}
        onPlantIdChange={(plant) => setPlantId(plant)}
        plantData={toString(plantData)}
      />
    </div>
  );
}

export default MyPlants;
