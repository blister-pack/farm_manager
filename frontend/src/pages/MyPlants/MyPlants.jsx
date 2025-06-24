import React, { useState } from "react";
import PlantCard from "../../components/PlantCard/PlantCard";
import usePlant from "../../hooks/usePlant";
import useAllPlants from "../../hooks/useAllPlants";

function MyPlants() {
  const [plantId, setPlantId] = useState(1);

  const plantsList = useAllPlants();
  const options = Object.keys(plantsList);
  const plantData = usePlant(plantId);

  return (
    <div>
      Here you can see all your plants
      <PlantCard
        label="Selected Plant"
        plantIdOptions={options}
        onPlantIdChange={(plant) => setPlantId(plant)}
        plantData={plantData}
        selectedOption={plantId}
      />
    </div>
  );
}

export default MyPlants;
