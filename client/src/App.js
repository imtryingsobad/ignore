import React, {Fragment, useState} from 'react';
import {Route,Switch} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutUs from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import ErrorPage from "./components/ErrorPage";
import Sidebar from './components/Sidebar';
import { ThemeProvider, Button, createTheme } from '@material-ui/core';
import Brightness4Icon from '@material-ui/icons/Brightness4';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };  
  const [darkMode,setDarkMode] = useState("true");
  
    const theme = createTheme({
        palette: {
            type: darkMode ? 'dark' : 'light',
          primary: {
            main: "#FF9FB6",
            light: "#fff",
            dark: "#000" 
          },
        },
      });

  return (
      <ThemeProvider theme={theme}>
      <Fragment>
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Navbar toggle={toggle} />
          <Switch>
              <Route exact path="/" ><Home/></Route>
              <Route path="/about" ><AboutUs/></Route>
              <Route path="/contact" ><Contact/></Route>
              <Route path="/login" ><Login theme={darkMode}/></Route>
              <Route path="/signup" ><SignUp/></Route>
              <Route><ErrorPage/></Route>
          </Switch>
        <Button onClick ={()=> setDarkMode(!darkMode)}>
            <Brightness4Icon style={{position: 'fixed', bottom: '15px', right: '15px'}} />
        </Button>
      </Fragment>
      </ThemeProvider>
  );
}

export default App;
