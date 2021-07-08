const jwt = require('jsonwebtoken');
const User = require("../model/userSchema")


const Authenticate = async (req,res,next)=>{
    try{

        // console.log("Abt pg")
        const token = req.cookies.jwtoken;
        const verifyToken = jwt.verify(token,process.env.SECRETKEY);

        const rootUser = await User.findOne({_id: verifyToken._id, "tokens.token": token});
        // console.log(rootUser);

        if(!rootUser){throw new Error('User not found')}

        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;

        next();

    }catch(err){
        res.status(401).send("Unauthorized: No token provided");
        console.log(err.message);
    }
}

module.exports = Authenticate;