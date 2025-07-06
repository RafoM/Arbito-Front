import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/Landing';
import LoginPage from '../pages/Login';
import DashboardPage from '../pages/Dashboard';
import ProtectedRoute from './ProtectedRoute';

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />

      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
