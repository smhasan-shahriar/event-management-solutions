import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Experiences from '../pages/Experiences';
import GetSupport from '../pages/GetSupport';

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <About></About>,
            },
            {
                path: "/services",
                element: <Services></Services>,
            },
            {
                path: "/experiences",
                element: <Experiences></Experiences>,
            },
            {
                path: "/support",
                element: <GetSupport></GetSupport>
            }
        ]
    }
])

export default Routes;