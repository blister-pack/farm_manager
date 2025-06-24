import React, { useState } from "react";
import PlantCard from "../../components/PlantCard/PlantCard";
import usePlant from "../../hooks/usePlant";
import useAllPlants from "../../hooks/useAllPlants";

function MyPlants() {
  const [plantId, setPlantId] = useState(1);

  const plantsList = useAllPlants();
  const options = Object.keys(plantsList);
  const plantData = usePlant(plantId);
  const plantName = plantData?.name;
  const plantTempRange = plantData?.temperature;
  const plantHumidityRange = plantData?.humidity;

  return (
    <div>
      Here you can see all your plants
      <PlantCard
        label="Selected Plant"
        plantIdOptions={options}
        onPlantIdChange={(plant) => setPlantId(plant)}
        plantData={plantData}
      />
    </div>
  );
}

export default MyPlants;
