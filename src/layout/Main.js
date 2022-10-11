import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import Home from '../components/Home/Home';

const Main = () => {
    return (
        <div>
            <Navbar />
            < Outlet />
        </div>
    );
};

export default Main;