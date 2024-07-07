import React from 'react';
import { Outlet, Navigate } from "react-router-dom";

function ProtectedRoute({}) {
    const login = localStorage.getItem("userId");
    return (
        login? <Outlet/>: <Navigate to="/"/>
    );
}

export default ProtectedRoute;