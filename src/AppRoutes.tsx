import LandingPage from './pages/Landing'
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Login';
import WatchListPage from './pages/Watchlist';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/watchlist" element={<WatchListPage />} />
        </Routes>
    )
}

export default AppRoutes