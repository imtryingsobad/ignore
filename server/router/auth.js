const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');


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


router.post('/signin', async (req,res)=>{
    try{
        const {email,password} = req.body;

        if(!email || !password){
            return res.status(422).json({error:"One or more fields empty"});
        }

        const userLogin = await User.findOne({email:email})


        if(userLogin ){
            const isMatch = await bcrypt.compare(password, userLogin.password);
            const token = await userLogin.generateAuthToken();


            res.cookie('jwt',token,{
                expires: new Date(Date.now() + 25892000000),
                httpOnly:true
            })

            if(!isMatch){
                res.json({error:"User Error"});
            }else{
                res.json({message:"User SignIn Successful"});
            }

        }else{
            res.json({error:"User Error"});
        }



    }catch (err) {
        console.log(err)
    }
})


module.exports = router;