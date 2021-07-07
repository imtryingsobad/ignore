const express = require('express');
const router = express.Router();

require('../db/conn');
const User = require('../model/userSchema');

router.get('/',async (req,res)=>{
    res.send('Hello World from server!');
});

router.post('/register', async (req,res)=>{

    const {name,email,phone,work,password, cpassword}= req.body;

    if(!name||!email||!phone||!work||!password||!cpassword){
        return res.status(422).json({error:"One or more fields empty"});
    }

    try{
        const userExist = await User.findOne({email:email});
        if(userExist){return res.json({error:"Email already exists"})}
        const user = new User({name,email,phone,work,password, cpassword});

        try{
            const userSaved = await user.save()

            if(userSaved){
                return res.json({message:"User Registered Successfully!"})
            }

        }catch{
            res.json({error:"Server Error"})
        }

    }catch(err){
        console.log(err)
    }

})



module.exports = router;