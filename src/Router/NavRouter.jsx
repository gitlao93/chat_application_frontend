import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Login from '../pages/Login.jsx'
import Register from '../pages/Register.jsx'
import Dashboard from '../pages/Dashboard.jsx'

function NavRouter() {
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const token = Cookies.get('token');
        const isAuthenticated = !!token;

        setAuthenticated(isAuthenticated);
    }, []);

    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {authenticated ? (
            <Route path="/dashboard" element={<Dashboard />} />
            ) : (
                <Route path="/dashboard" element={<Navigate to="/" replace />} />
            )}
        </Routes>
    );
}

export default NavRouter;