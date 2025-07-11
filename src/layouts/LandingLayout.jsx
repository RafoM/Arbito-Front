import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/layouts/Footer/Footer';
import Header from "../components/layouts/headers/Header";

const LandingLayout = () => {
    return (
        <div className="landing-layout">
            <Header variant={'landing'}/>
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default LandingLayout;
