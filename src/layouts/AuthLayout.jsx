import { Outlet } from 'react-router-dom';

const AuthLayout = () => (
  <div>
    <main>
      <Outlet />
    </main>
  </div>
);

export default AuthLayout;
