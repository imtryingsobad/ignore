// @flow
import React, {Fragment, useState} from 'react';
import {useHistory} from 'react-router-dom';

export const SignUp = () => {

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
        <Fragment>
            <section>
                <div>
                    <h2>SignUp</h2>

                    <form method="POST" onSubmit={PostData} >
                        <div>
                            <input type="text" name='name' id="name" autoComplete="off" placeholder="Your Name" value={user.name} onChange={handleInputs}/>
                        </div>
                        <div>
                            <input type="text" name='email' id="email" autoComplete="off" placeholder="Your Email" value={user.email} onChange={handleInputs}/>
                        </div>
                        <div>
                            <input type="number" name='phone' id="phone" autoComplete="off" placeholder="Your Phone" value={user.phone} onChange={handleInputs}/>
                        </div>
                        <div>
                            <input type="text" name='work' id="work" autoComplete="off" placeholder="Your Profession" value={user.work} onChange={handleInputs}/>
                        </div>
                        <div>
                            <input type="text" name='password' id="password" autoComplete="off" placeholder="Your Password" value={user.password} onChange={handleInputs}/>
                        </div>
                           <div>
                            <input type="text" name='cpassword' id="cpassword" autoComplete="off" placeholder="Confirm Your Password" value={user.cpassword} onChange={handleInputs}/>
                        </div>

                           <div>
                            <input type="submit" name='register' id="register" value="Register"/>
                        </div>


                    </form>
                </div>
            </section>
        </Fragment>
    );
};

export default SignUp;