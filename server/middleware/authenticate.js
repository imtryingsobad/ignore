const jwt = require('jsonwebtoken');
const User = require("../model/userSchema")

const Authenticate = async (req,res,next)=>{
    try{

        const token = req.cookies.jwt;
        const verifyToken = jwt.verify(token,process.env.SECRETKEY);

        const rootUser = await User.findOne({_id: verifyToken.id, "tokens:token": token});

        if(!rootUser){throw new Error('User not found')}

        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;

        next();

    }catch{
        res.status(401).send("Unauthorized: No token provided");
        console.log(err.message);
    }
}

module.exports = Authenticate;