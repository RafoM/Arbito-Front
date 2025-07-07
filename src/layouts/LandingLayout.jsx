import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const LandingLayout = ({ header }) => (
  <div>
    {header}
    <main>
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default LandingLayout;
