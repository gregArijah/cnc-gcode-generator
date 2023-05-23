import React from 'react';
import { Outlet } from 'react-router-dom';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, ...rest }) =>    {
const isAuthenticated = localStorage.getItem('javatrolToken') != null;
//const navigate = Navigate();
return isAuthenticated ? (
  <Outlet/>//<Route {...rest} element={<Component />} />
) : (
  <Navigate to="/" />
);
};

 
export default ProtectedRoute;

// export default App;
