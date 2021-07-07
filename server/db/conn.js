const mongoose = require('mongoose');

const DB = process.env.DATABASE


mongoose.connect(DB,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true,useFindAndModify:true}).then(()=>{console.log('Connection Successful!')}).catch((err)=>{console.log('Error!')});
