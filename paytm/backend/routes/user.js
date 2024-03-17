const express = require("express")
const zod = require("zod")
const router = express.Router()
const jwt = require("jsonwebtoken")
const { User, Account } = require("../db")
const { JWT_SECRET } = require("../config")
const { authMiddleware } = require("../middleware")

//signup
const signupSchema = zod.object({
    firstName : zod.string(),
    lastName : zod.string(),
    username : zod.string().email(),
    password : zod.string(),
})


//route to signup

router.post("/signup",async (req,res)=>{
    const { success, data} = signupSchema.safeParse(req.body)
    console.log("request was made")
    if(!success){
        return res.status(411).json({
            message : "Email already taken/ Invalid details",
            errors : data.errors
        })
    }

    const existingUser = await User.findOne({
        username : req.body.username
    })

    if(existingUser){
        return res.status(411).json({
            message : "Email alreayd taken/ Invalid details"
        })
    }

    const user = await User.create({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        username : req.body.username,
        password : req.body.password,
    })

    const userId = user._id;

    await Account.create({
        userId,
        balance : 1 + Math.random() * 10000
    })
    
    const token = jwt.sign({
        userId
    }, JWT_SECRET);

    res.json({
        message: "User created successfully",
        token: token
    })
})


//signinSchema
const siginSchema = zod.object({
    username : zod.string().email(),
    password : zod.string()
})


//route to Signin
router.post("/signin", async (req,res)=>{
    const { success } = siginSchema.safeParse(req.body)
    if(!success){
        return res.status(411).json({
            message : "Invalid Inputs"
        })
    }

    const user = await User.findOne({
        username : req.body.username,
        password : req.body.password
    })

    if(user){
        const token = jwt.sign({
            userid : user._id
        },JWT_SECRET)

        res.json({
            token : token
        })
        return
    }

    res.status(411).json({
        message : "Error while logging in"
    })
})


//update user credentials
const updateSchema = zod.object({
    password : zod.string().optional(),
    firstName : zod.string().optional(),
    lastName : zod.string().optional()
})

//route to update credentials
router.put("/", authMiddleware, async (req,res)=>{
    const { success } = updateSchema.safeParse(req.body)
    if(!success){
        return res.status(411).json({
            message : "Error while updating information"
        })
    }

    await User.updateOne({_id: req.userId}, req.body)

    res.json({
        message : "Updated Successfully"
    })
})

//request for bulk users(fiding users to send payments)
router.get("/bulk", async (req,res)=>{
    const filter = req.query.filter || ""

    const users = await User.find({
        $or : [{
            firstName : {
                "$regex" : filter
            }
        }, {
            lastName : {
                "#regex" : filter
            }
        }]
    })

    res.json({
        user : users.map(user=>({
            username: user.username,
            firstName: user.firstName,
            lastName : user.lastName,
            _id : user._id
        }))
    })
})
module.exports = router