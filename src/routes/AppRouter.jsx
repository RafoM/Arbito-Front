import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/Landing';
import LoginPage from '../pages/Login';
import DashboardPage from '../pages/Dashboard';

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />

      {/* Protected Routes (to be guarded later) */}
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
