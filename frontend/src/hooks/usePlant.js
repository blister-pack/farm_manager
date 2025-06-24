import React, { useEffect, useState } from "react";

function usePlant(plantId) {
    const [plantData, setPlantData] = useState(null);
    useEffect(() => {
        const fetchPlantData = async () => {
            const fetchedPlantData = await fetch(`http://127.0.0.1:8000/plant/${plantId}`);
            const json = await fetchedPlantData.json();
            setPlantData(json);
        };
        fetchPlantData();
    }, [plantId])

    console.log(plantData);
    return plantData;
}

export default usePlant;
