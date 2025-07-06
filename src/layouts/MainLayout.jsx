import { Outlet } from 'react-router-dom';

const MainLayout = ({ header, sidebar }) => (
  <div>
    {header}
    {sidebar && <aside>{sidebar}</aside>}
    <main>
      <Outlet />
    </main>
  </div>
);

export default MainLayout;
