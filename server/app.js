const express = require('express');
require('dotenv').config();

const app = express();
require('./db/conn');

app.use(express.json());
app.use(require('morgan')('dev'))

//Linking router files
app.use(require('./router/user'));

const PORT = process.env.PORT;



app.listen(PORT,()=>{
    console.log(`Server running at port ${PORT}`);
})