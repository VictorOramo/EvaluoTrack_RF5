import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from 'Layout';
import NonAuthLayout from 'Layout/NonAuthLayout';

//routes
import { publicRoutes, authProtectedRoutes } from "./allRoutes";
import { AuthProtected } from './AuthProtected';

const Index = () => {
    return (
        <React.Fragment>
            <Routes>
                <Route>
                    {publicRoutes.map((route: any, idx: number) => (
                        <Route
                            key={idx}
                            path={route.path}
                            element={<NonAuthLayout> {route.component} </NonAuthLayout>}
                        />
                    ))}
                </Route>

                <Route>
                    {authProtectedRoutes.map((route: any, idx: number) => (
                        
                        <Route
                            key={idx}
                            path={route.path}                            
                            element={<AuthProtected><Layout>{route.component}</Layout> </AuthProtected>}
                        />
                    ))}
                </Route>
            </Routes>
        </React.Fragment>
    );
}

export default Index;