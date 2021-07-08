import React, {Fragment,useState} from 'react';
import {Button, Paper, CssBaseline, TextField, Box, Grid, Typography, Avatar, Container} from '@material-ui/core';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import {useHistory} from 'react-router-dom';
import GIF from '../images/Login.gif';
import swal from 'sweetalert';
import GIFwhite from '../images/LoginWhite.gif';
import '../App.css';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(6),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(0),
    height: '20vh',
    width: '20vh',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


const Login = ({theme}) => {
  const classes = useStyles();

  const history = useHistory();
  const [email,setEmail]= useState('');
  const [password,setPassword]= useState('');


  const loginUser= async (e)=>{
      e.preventDefault();

      const res = await fetch("/signin",{
          method:"POST",
          headers:{
              "Content-Type":"application/json"
          },
          body: JSON.stringify({
              email,password
          })
      });

      const data =await res.json();

      if(res.status===400 || !data){
        swal({
          title: "Oh No!",
          text: "Invalid Credentials!",
          icon: "error",
          button: "close",
          className : theme ? '.dark-modal' : '.light-modal',
        });
          console.log("Invalid Credentials");
      }else{
        swal({
          className : theme ? '.dark-modal' : '.light-modal',
          title: "Woah!",
          text: "Successful Login!",
          icon: "success",
          button: "okay!",
        });
          console.log("Successful Login");
          history.push('/');
      }

  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>

      {console.log(theme)}
      <Avatar  variant="square" className={classes.avatar} src={ theme ? GIF : GIFwhite} />

        <Typography variant="h6">
          Hey! Welcome Back!
        </Typography>
        <form className={classes.form} noValidate method="POST" onSubmit={loginUser}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e)=>{setEmail(e.target.value)}} 
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e)=>{setPassword(e.target.value)}} 
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            style={{backgroundColor: '#F50057', color: '#FFFFFF'}}
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2" style={{ color: '#999'}}>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2" style={{ color: '#999'}}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default Login;