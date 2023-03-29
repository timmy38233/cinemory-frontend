import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [healthStatus, setHealthStatus] = useState({status: 'Unknown'});

    useEffect(() => {
        const url = `${process.env.REACT_APP_BACKEND_URL}/healthcheck`;
        fetch(url)
        .then(res => res.json())
        .then(
            (result) => {
                setHealthStatus({
                    status: result.status
                });
            }
        )
    }, [])

    return (
        <div className="App">
            Backend connection status: <span className="App__health">{healthStatus.status}</span>
        </div>
    );
}

export default App;
