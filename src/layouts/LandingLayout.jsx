import { Outlet } from 'react-router-dom';

const LandingLayout = ({ header }) => (
  <div>
    {header}
    <main>
      <Outlet />
    </main>
  </div>
);

export default LandingLayout;
