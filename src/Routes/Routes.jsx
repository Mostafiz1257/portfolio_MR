import React from 'react';
import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import About from '../components/About/About';
import Resume from '../components/Resume/Resume';
import Portfolio from '../components/Portfolio/Portfolio';
import Blog from '../components/Blog/Blog';
import Contract from '../components/Contract/Contract';
import Home from '../components/Home/Home';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            // {
            //     path:'/about',
            //     element:<About></About>
            // },
            {
                path:'/resume',
                element:<Resume></Resume>
            },
            {
                path:'/portfolio',
                element:<Portfolio></Portfolio>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/contract',
                element:<Contract></Contract>
            }
        ]
    },
    
]);