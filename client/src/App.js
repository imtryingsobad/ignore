import React, {Fragment} from 'react';
import {Route,Switch} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutUs from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import ErrorPage from "./components/ErrorPage";


function App() {
  return (
      <Fragment>
          <Navbar/>

          <Switch>
              <Route exact path="/" ><Home/></Route>
              <Route path="/about" ><AboutUs/></Route>
              <Route path="/contact" ><Contact/></Route>
              <Route path="/login" ><Login/></Route>
              <Route path="/signup" ><SignUp/></Route>
              <Route><ErrorPage/></Route>
          </Switch>

      </Fragment>
  );
}

export default App;
