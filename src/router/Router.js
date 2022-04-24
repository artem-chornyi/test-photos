import React from 'react';
import { Routes, Route } from "react-router-dom";
import { publicRoutes } from './routes';
import { Layout } from '../components'



const Router = () => {
    const routes = publicRoutes;

    return (
        <>
            <Routes>
                <Route path='/' element={ <Layout/> } >
                    {
                        routes.map(route => (
                            <Route {...route} key={ route.path || route.index } />
                        ))
                    }
                </Route>
            </Routes>
        </>
    );
};

export default Router;