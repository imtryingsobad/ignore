// @flow
import React, {Fragment,useState} from 'react';
import {useHistory} from 'react-router-dom';

export const Login = () => {

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

        if(data.status===400 || !data){
            window.alert("Invalid Credentials");
            console.log("Invalid Credentials");
        }else{
            window.alert("Successful Login");
            console.log("Successful Login");
            history.push('/');
        }

    }


    return (
        <Fragment>
            <section>
                <div>
                    <h2>Login</h2>

                    <form method="POST" onSubmit={loginUser}>
                        <div>
                            <input type="text" name='email' id="email" autoComplete="off" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Your Email"/>
                        </div>
                        <div>
                            <input type="text" name='password' id="password" autoComplete="off" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Your Password"/>
                        </div>

                        <div>
                            <input type="submit" name='signin' id="signin" value="Sign In"/>
                        </div>


                    </form>
                </div>
            </section>
        </Fragment>
    );
};

export default Login;