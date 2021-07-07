const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv');

const app = express();



dotenv.config({path:'./config.env'});
require('./db/conn');



const PORT = process.env.PORT;

app.get('/',(req,res)=>{
    res.send('Hello World from server!');
});

app.listen(PORT,()=>{
    console.log(`Server running at port ${PORT}`);
})