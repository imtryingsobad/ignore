const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();
require('./db/conn');

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(require('morgan')('dev'))

//Linking router files
app.use('/user', require('./router/user'));
app.use('/admin', require('./router/admin'));

const PORT = process.env.PORT || 5000;



app.listen(PORT,()=>{
    console.log(`Server running at port ${PORT}`);
})