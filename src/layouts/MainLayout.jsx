import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const MainLayout = ({ header, sidebar }) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => setCollapsed((c) => !c);

  return (
    <div>
      <FaBars onClick={toggle} />
      {header}
      {sidebar && <aside>{React.cloneElement(sidebar, { collapsed, onCollapse: toggle })}</aside>}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
