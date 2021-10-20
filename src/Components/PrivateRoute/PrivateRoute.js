// this route is for private route only.
// user can view this pages if they are logged in 
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useAuth();
    return (
        <Route
            {...rest}
            render=
            {
                ({ location }) =>
                    user ? (children) :
                        <Redirect to={
                            {
                                pathname: "/login",
                                state: { from: location }
                            }
                        }></Redirect>

            }
        >
        </Route>
    );
};

export default PrivateRoute;