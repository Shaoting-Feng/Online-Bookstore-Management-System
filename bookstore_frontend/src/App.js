import React from "react";
import {BrowserRouter as Router, useRoutes} from 'react-router-dom';
import HomeView from './view/HomeView';
import LoginView from './view/LoginView';
import PayView from './view/PayView';
import RegisterView from './view/RegisterView';
import BookView from './view/BookView';
import AdminView from './view/AdminView';
import AdminOrderView from './view/AdminOrderView';
import AdminUserView from "./view/AdminUserView";
import StatisticsView from "./view/StatisticsView";
import ViewUserView from "./view/ViewUserView";

const BasicRoute = () => {
    return useRoutes([
        {
            path: "/",
            element: <HomeView />
        },
        {
            path: "/login",
            element: <LoginView />
        },
        {
            path: "/confirm",
            element: <PayView />
        },
        {
            path: "/register",
            element: <RegisterView />
        },
        {
            path: "/detail",
            element: <BookView />
        },
        {
            path: "/admin",
            element: <AdminView />
        },
        {
            path: "/adminOrder",
            element: <AdminOrderView />
        },
        {
            path: "/adminUser",
            element: <AdminUserView />
        },
        {
            path: "/statistics",
            element: <StatisticsView />
        },
        {
            path: "/viewUser",
            element: <ViewUserView />
        },
    ]);
}

function App() {
    return (
        <Router>
            <BasicRoute />
        </Router>
    )
}

export default App;
