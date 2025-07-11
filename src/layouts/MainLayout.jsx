import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/layouts/Footer/Footer';

const MainLayout = ({ header, sidebar }) => {
    return (
        <div className="layout">
            {header}
            <div className="content">
                {sidebar && <aside className="sidebar">{sidebar}</aside>}
                <main className="main">
                    <Outlet />
                </main>
            </div>
            {!sidebar && <Footer />}
        </div>
    );
};

export default MainLayout;
