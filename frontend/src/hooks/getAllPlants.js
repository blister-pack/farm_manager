import React, { useEffect, useState } from 'react'

function getAllPlants() {
    const [plantsList, setPlantsList] = useState({});

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/plants`)
            .then(response =>  response.json() )
            .then((response) => setPlantsList(response))
    }, [])

    console.log(plantsList);
    return plantsList;
    

    
    
}

export default getAllPlants