import React, { useEffect, useState } from 'react'

function useAllPlants() {
    const [plantsList, setPlantsList] = useState({});

    useEffect(() => {
        const fetchPlantsList = async () => {
            const response = await fetch(`http://127.0.0.1:8000/plants`);
            const json = await response.json();
            setPlantsList(json);
        };
        fetchPlantsList();
    }, [])

    console.log(plantsList);
    return plantsList;
}

export default useAllPlants