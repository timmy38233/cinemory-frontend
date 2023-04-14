import { useEffect, useReducer } from 'react';
import AppRoutes from '../../AppRoutes';
import { AppStateContext } from '../../state/context/AppStateContext';
import appStateReducer from '../../state/reducer/appStateReducer';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './App.css';
import { initialState } from '../../state/initialState';
import { ActionType } from '../../state/actions/Actions';

function App() {
    const [state, dispatch] = useReducer(appStateReducer, initialState);

    // Get token and isAuthenticated from localStorage and call dispatch to save them in state in useEffect hook
    useEffect(() => {
        const token = localStorage.getItem('token');
        const isAuthenticated = localStorage.getItem('isAuthenticated');
        if (token && isAuthenticated) {
            dispatch({
                type: ActionType.setToken,
                payload: token
            });
            dispatch({
                type: ActionType.setIsAuthenticated,
                payload: isAuthenticated === 'true'
            });
        }
    }, []);
    

    return (
        <AppStateContext.Provider value={{ state, dispatch }}>
            <div className="App">
                <Header />
                <main className="App__main">
                    <AppRoutes />
                </main>
                <Footer />
            </div>
        </AppStateContext.Provider>
    );
}

export default App;
