import React, { useState, useEffect } from "react";

export default function App() {
    const [location, setLocation] = useState({});

    useEffect(() => {
        const watchId = navigator.geolocation.watchPosition(handlePositionReceived);

        return () => navigator.geolocation.clearWatch(watchId);
    }, []);

    function handlePositionReceived({ coords }) {
        const { latitude, longitude } = coords;

        setLocation({ latitude, longitude });
    }

    return (
        <>
            Latitude: {location.latitude} <br />
            Longitude: {location.longitude}
        </>
    );
}

/* export default function App() {
    
    const [repositories, setRepositories] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://api.github.com/users/nathan2m/repos');
            const data = await response.json();
            setRepositories(data);
        }
        fetchData();
    }, []);

    useEffect(() => {
        const filtered = repositories.filter(repo => repo.favorite);
        document.title = `Você tem ${filtered.length} favoritos`
    }, [repositories]);

    function handleFavorite(id) {
        const newRepositories = repositories.map(repo => {
            return repo.id === id ? { ...repo, favorite: !repo.favorite } : repo
        });
        setRepositories(newRepositories);
    }
    return (

        <ul>
            {repositories.map((repo) => (
                <li key={repo.id}>
                    {repo.name}
                    {repo.favorite && <span> (Favorito) </span>}
                    <button onClick={() => handleFavorite(repo.id)}>Favoritar</button>
                </li>
            ))}
        </ul>

    );
} */