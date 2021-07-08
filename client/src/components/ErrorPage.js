import  React from 'react';
import {NavLink} from "react-router-dom";
import  error404  from '../images/404.gif';
import  error404white from '../images/404white.gif';
import { Typography, Container} from '@material-ui/core';

export const ErrorPage = ({}) => {
    return (
        <Container>
        <center>
            <img src={error404white} alt="error" /> 
            <h5>
            <NavLink className="nav-link lead" to="/">Go to Home</NavLink>
            </h5>
        </center>
        </Container>
    );
};

export default ErrorPage;