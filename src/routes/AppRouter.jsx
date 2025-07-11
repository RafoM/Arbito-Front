import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import AuthLayout from '../layouts/AuthLayout';
import LandingLayout from '../layouts/LandingLayout';
import { ProtectedRoute } from '../components/routing/ProtectedRoute';
import Header from '../components/layouts/headers/Header';
import ToolSidebar from '../components/Sidebars/ToolSidebar';
import UserSidebar from '../components/Sidebars/UserSidebar';

import LandingPage from '../pages/Landing';
import EarlyAccessPage from '../pages/EarlyAccessPage';
import LoginPage from '../pages/Login';
import RegisterPage from '../pages/RegisterPage';
import ForgotPasswordPage from '../pages/ForgotPasswordPage';
import VerifyEmailPage from '../pages/VerifyEmailPage';
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
      {/* Landing routes */}
      <Route element={<LandingLayout header={<Header variant="landing" />} />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/early-access" element={<EarlyAccessPage />} />
      </Route>

      {/* Auth routes */}
      <Route element={<AuthLayout header={<Header variant="auth" />} />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/verify-email" element={<VerifyEmailPage />} />
      </Route>

      {/* Public routes */}
      <Route element={<MainLayout header={<Header variant="main" />} />}>
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetailsPage />} />
        <Route path="/cases" element={<CasePage />} />
        <Route path="/cases/:id" element={<CaseDetailsPage />} />
        <Route path="/tutorials" element={<TutorialsPage />} />
      </Route>

      {/* Protected routes - user dashboard */}
      <Route element={<ProtectedRoute><MainLayout header={<Header variant="main" />} sidebar={<UserSidebar />} /></ProtectedRoute>}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/referrals/activity" element={<ReferralActivityPage />} />
        <Route path="/referrals/withdrawals" element={<ReferralWithdrawalsPage />} />
        <Route path="/payments/history" element={<PaymentHistoryPage />} />
        <Route path="/settings" element={<UserSettingsPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
      </Route>

      {/* Protected routes - tools */}
      <Route element={<ProtectedRoute><MainLayout header={<Header variant="main" />} sidebar={<ToolSidebar />} /></ProtectedRoute>}>
        <Route path="/tools" element={<ScannerDashboardPage />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
