import React from "react";
import { Outlet } from 'react-router-dom';
import { CustomHeader } from "../Ui";
import { MainContent } from "../index"



const Layout = () => {
    return (
        <>
            <CustomHeader/>
            <MainContent>
                <Outlet/>
            </MainContent>
        </>
    )
};

export default Layout;