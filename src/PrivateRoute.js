import React, { useContext } from 'react';
import { TokenContext } from './Context';
import { Navigate,  Outlet } from 'react-router-dom';



const PrivateRoute = () => {
    const {token} = useContext(TokenContext);

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return token ? <Outlet /> : <Navigate to="/login" />;
    
}

export default PrivateRoute;