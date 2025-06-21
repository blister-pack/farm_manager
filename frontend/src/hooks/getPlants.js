import { useEffect, useState } from "react";

function getPlants(plantId) {
    const [plantData, setPlantData] = useState({});
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/plant/${plantId}`)
            .then(response => { response.json() })
            .then((response) => {setPlantData(response)})
    }, [plantId])

    return plantData
    console.log(plantData);
    
}

export default getPlants;
