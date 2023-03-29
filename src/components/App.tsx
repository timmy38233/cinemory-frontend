import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [httpHealthStatus, setHttpHealthStatus] = useState({ status: 'unknown' });
    const [dbHealthStatus, setDbHealthStatus] = useState({ status: 'unknown' });

    useEffect(() => {
        const urlHttpHealthCheck = `${process.env.REACT_APP_BACKEND_URL}/httpHealthCheck`;
        fetch(urlHttpHealthCheck)
            .then(res => res.json())
            .then(
                (result) => {
                    setHttpHealthStatus({
                        status: result.status
                    });
                }
            );

    }, []);

    useEffect(() => {
        if (httpHealthStatus.status === 'reachable') {
            const urlDbHealthCheck = `${process.env.REACT_APP_BACKEND_URL}/databaseHealthCheck`;
            fetch(urlDbHealthCheck)
                .then(res => res.json())
                .then(
                    (result) => {
                        setDbHealthStatus({
                            status: result.status
                        });
                    }
                );
        }
    }, [httpHealthStatus]);

    return (
        <div className="App">
            <div className="App__healthCheck">Frontend - Backend connection status: <code>{httpHealthStatus.status}</code></div>
            {httpHealthStatus.status !== 'unknown' &&
                <div className="App__healthCheck">Backend - Database connection status: <code>{dbHealthStatus.status}</code></div>
            }

        </div>
    );
}

export default App;
