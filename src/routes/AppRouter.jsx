import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import AuthLayout from '../layouts/AuthLayout';
import ProtectedRoute from '../components/routing/ProtectedRoute';

import LandingPage from '../pages/Landing';
import LoginPage from '../pages/Login';
import RegisterPage from '../pages/RegisterPage';
import BlogPage from '../pages/BlogPage';
import BlogDetailsPage from '../pages/BlogDetailsPage';
import CasePage from '../pages/CasePage';
import CaseDetailsPage from '../pages/CaseDetailsPage';
import TutorialsPage from '../pages/TutorialsPage';

import DashboardPage from '../pages/Dashboard';
import ReferralActivityPage from '../pages/ReferralActivityPage';
import ReferralWithdrawalsPage from '../pages/ReferralWithdrawalsPage';
import ScannerDashboardPage from '../pages/ScannerDashboardPage';
import PaymentHistoryPage from '../pages/PaymentHistoryPage';
import UserSettingsPage from '../pages/UserSettingsPage';
import NotificationsPage from '../pages/NotificationsPage';

import NotFound from '../pages/NotFound';

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      {/* Auth routes */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      {/* Public routes */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetailsPage />} />
        <Route path="/cases" element={<CasePage />} />
        <Route path="/cases/:id" element={<CaseDetailsPage />} />
        <Route path="/tutorials" element={<TutorialsPage />} />
      </Route>

      {/* Protected routes */}
      <Route element={<ProtectedRoute><MainLayout /></ProtectedRoute>}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/referrals/activity" element={<ReferralActivityPage />} />
        <Route path="/referrals/withdrawals" element={<ReferralWithdrawalsPage />} />
        <Route path="/scanner" element={<ScannerDashboardPage />} />
        <Route path="/payments/history" element={<PaymentHistoryPage />} />
        <Route path="/settings" element={<UserSettingsPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
