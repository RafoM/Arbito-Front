import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/layouts/Footer/Footer';

const MainLayout = ({ header, sidebar }) => {

  return (
    <div>
      {header}
      {sidebar && <aside>{sidebar}</aside>}
      <main>
        <Outlet />
      </main>
      {!sidebar && <Footer />}
    </div>
  );
};

export default MainLayout;
