import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('token'); // Replace with better logic if needed

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
