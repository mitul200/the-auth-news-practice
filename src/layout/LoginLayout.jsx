/* eslint-disable no-unused-vars */
import React from 'react';
import Navber from '../pages/Shared/Navber/navber';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;