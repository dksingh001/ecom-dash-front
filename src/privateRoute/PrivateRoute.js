import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const auth = localStorage.getItem('ecomtoken')
    return (
        
          auth ? <Outlet /> : <Navigate to="login"> </Navigate>
        
    );
}

export default PrivateRoute;