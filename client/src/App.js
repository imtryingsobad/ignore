import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutUs from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import SignUp from "./components/Signup";


function App() {
  return (
      <Fragment>
          <Navbar/>

          <Route exact path="/" ><Home/></Route>
          <Route path="/about" ><AboutUs/></Route>
          <Route path="/contact" ><Contact/></Route>
          <Route path="/login" ><Login/></Route>
          <Route path="/signup" ><SignUp/></Route>

      </Fragment>
  );
}

export default App;
