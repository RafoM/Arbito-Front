import { Outlet } from 'react-router-dom';

const MainLayout = ({ header }) => (
  <div>
    {header}
    <aside>Sidebar</aside>
    <main>
      <Outlet />
    </main>
  </div>
);

export default MainLayout;
