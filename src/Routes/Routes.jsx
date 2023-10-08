import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Experiences from '../pages/Experiences';
import GetSupport from '../pages/GetSupport';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ErrorPage from '../pages/ErrorPage';
import ServiceDetails from '../pages/ServiceDetails';
import PrivateRoutes from './PrivateRoutes';

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
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
                element: <PrivateRoutes><Experiences></Experiences></PrivateRoutes>,
            },
            {
                path: "/support",
                element: <PrivateRoutes><GetSupport></GetSupport></PrivateRoutes> 
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/services/:id",
                element: <PrivateRoutes><ServiceDetails></ServiceDetails></PrivateRoutes>,
                loader: () => fetch('/data.json')
            }
        ]
    }
])

export default Routes;