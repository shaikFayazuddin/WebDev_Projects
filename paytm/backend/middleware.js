const { JWT_SECRET } = require("./config")
const jwt = require("jsonwebtoken")

const authMiddleware = (req,res,next)=>{
    const authHeader = req.headers.authorization

    if(!authHeader || !authHeader.startsWith("Bearer ")){
        return res.status(403).json({
            message : "Please provide the authHeader"
        })
    }

    const token = authHeader.split(" ")[1]

    try{
        const decoded = jwt.sign(token, JWT_SECRET)
        req.userId = decoded.userID
        next()
    }catch(err){
        return res.status(403).json({})
    }
}

module.exports = {
    authMiddleware
}
