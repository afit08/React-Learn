import React from "react";
import { useRoutes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import AllProducts from "./views/AllProducts";
import BlankPage from "./components/BlankPage";
import Signin from "./views/Signin";

export default function Routes() {
    return useRoutes([
        {
            path: '/',
            element: <LandingPage/>,
            children: [
                { path: 'home', element: <Home/> },
                { path: 'allProducts', element: <AllProducts/> },
            ]
        },
        {
            path: '/auth',
            element: <BlankPage/>,
            children: [
                { path: "signin", element: <Signin/> }
            ]
        }
    ])
}