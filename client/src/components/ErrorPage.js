// @flow
import * as React from 'react';
import {NavLink} from "react-router-dom";


export const ErrorPage = () => {
    return (
        <div>
            <h2>Error 404! Not found</h2>
            <NavLink className="nav-link lead" to="/">Go to Home</NavLink>
        </div>
    );
};

export default ErrorPage;