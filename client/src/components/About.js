// @flow
import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';

export const AboutUs = () => {

    const history = useHistory();

    const callAboutPage = async()=>{
        try{
            const res = await fetch('/about',{
                method: "GET",
                headers:{
                    Accept:"application/json",
                    "Content-Type": "application/json"
                },
                credentials:"include"
            })

            const data =  await res.json();
            console.log(data);

            if(!res.status===200){
                const error = new Error(res.error);
                throw error
            }
        }catch (err){
            console.log(err);
            history.push('/login');
        }
    }


    useEffect(()=>{
        callAboutPage();
    },[])

    return (
        <div>
            <p>Welcome</p>
            <h1>About us page</h1>
        </div>
    );
};

export default AboutUs;