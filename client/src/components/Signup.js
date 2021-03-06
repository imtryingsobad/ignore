import React, {Fragment, useState} from 'react';
import {Button, Paper, CssBaseline, TextField, Box, Grid, Typography, Avatar, Container} from '@material-ui/core';
import Link from '@material-ui/core/Link';
import GIF from '../images/Login.gif';
import GIFwhite from '../images/LoginWhite.gif';
import { makeStyles } from '@material-ui/core/styles';
import {useHistory} from 'react-router-dom';
import swal from 'sweetalert';
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

        const res = await fetch("/user/register",{
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
        console.log(data);

        if(res.status===422 || !data){
            swal({
                title: "Oh No!",
                text: "Invalid Credentials!",
                icon: "error",
                button: "close",
                className : theme ? '.dark-modal' : '.light-modal',
              });
            console.log("Invalid Registration");
        }else{
            swal({
                className : theme ? '.dark-modal' : '.light-modal',
                title: "Woah!",
                text: "Successful Login!",
                icon: "success",
                button: "okay!",
              });
            console.log("Successful Registration");
            history.push('/login');
        }

    }


  return (
      <Fragment>
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
                autoComplete="off"
                onChange={handleInputs}
                value = {user.email}
              />
            </Grid>
              <Grid item xs={12}>
                  <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="phone"
                      label="Phone Number"
                      name="phone"
                      autoComplete="off"
                      onChange={handleInputs}
                      value = {user.phone}
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
                autoComplete="off"
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
            className={classes.submit} onClick={PostData}
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
      </Fragment>
  );
}