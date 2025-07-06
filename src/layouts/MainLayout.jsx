import { Outlet } from 'react-router-dom';

const MainLayout = () => (
  <div>
    <header>Header</header>
    <aside>Sidebar</aside>
    <main>
      <Outlet />
    </main>
  </div>
);

export default MainLayout;
