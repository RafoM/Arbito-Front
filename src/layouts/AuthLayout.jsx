import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const AuthLayout = ({ header }) => (
  <div>
    {header}
    <main>
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default AuthLayout;
