import React, { useEffect, useState } from "react";

function usePlant(plantId) {
    const [plantData, setPlantData] = useState(null);
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/plant/${plantId}`)
            .then(response =>  response.json())
            .then((response) => setPlantData(response))
    }, [plantId])

    console.log(plantData);
    return plantData;
    
}

export default usePlant;
