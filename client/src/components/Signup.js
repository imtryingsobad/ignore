import React, {Fragment, useState} from 'react';
import {Button, Paper, CssBaseline, TextField, Box, Grid, Typography, Avatar, Container} from '@material-ui/core';
import Link from '@material-ui/core/Link';
import GIF from '../images/Login.gif';
import GIFwhite from '../images/LoginWhite.gif';
import { makeStyles } from '@material-ui/core/styles';
import {useHistory} from 'react-router-dom';

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
    marginTop: theme.spacing(4),
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp({theme}) {
  const classes = useStyles();

  const history = useHistory();

    const [user,setUser]= useState({
        name:"",
        email:"",
        phone:"",
        work:"",
        password:"",
        cpassword:"",
    })

    let name,value;

    const handleInputs = (e)=>{
        console.log(e);
        name=e.target.name;
        value=e.target.value;

        setUser({...user,[name]:value})
    }

    const PostData= async (e)=>{
        e.preventDefault();

        const {name, email,  phone, work,password, cpassword} = user;

        const res = await fetch("/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                name,
                email,
                phone,
                work,
                password,
                cpassword
            })
        });

        const data =await res.json();

        if(data.status===422 || !data){
            window.alert("Invalid Registration");
            console.log("Invalid Registration");
        }else{
            window.alert("Successful Registration");
            console.log("Successful Registration");
            history.push('/login');
        }

    }


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>      

      <Avatar  variant="square" className={classes.avatar} src={ theme ? GIF : GIFwhite} />

        <form className={classes.form} noValidate method="POST" onSubmit={PostData}  >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="name"
                id="name"
                label="Your Name"
                value = {user.name}
                variant="outlined"
                required
                fullWidth
                autoComplete="off"
                onChange={handleInputs}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="work"
                label="Your Profession"
                name="work"
                autoComplete="off"
                onChange={handleInputs}
                value= {user.work}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleInputs}
                value = {user.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleInputs}
                value={user.password}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="cpassword"
                label="Confirm Password"
                type="cpassword"
                id="cpassword"
                autoComplete="off"
                onChange={handleInputs}
                value={user.cpassword}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            style={{backgroundColor: '#F50057', color: '#FFFFFF'}}
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2" style={{ color: '#999'}}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}