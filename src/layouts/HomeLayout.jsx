import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomeLayout = () => {
    return (
        <div className='flex flex-col'>
            <header>
                <Navbar />
            </header>
            <main className='flex-1'>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default HomeLayout;