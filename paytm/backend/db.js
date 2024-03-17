const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://fayazuddin:fayazuddin@cluster0.j93misu.mongodb.net/")

var UserSchema =  new mongoose.Schema({
    firstName : {
        type : String,
        required : true,
        minlength : 2,
        maxlength : 50,
    },
    lastName : {
        type : String,
        required : true,
        minlength : 2,
        maxlength : 50,
    },
    username : {
        type : String,
        required : true,
        minlength : 2,
        maxlength : 50,
        lowercase : true,
        unique : true,
        trim : true, //this is to trim the extra spaces from the beginning and the ending of the username
    },
    password : {
        type : String,
        required : true,
        minlength : 8,
        maxlength : 50,
    },
})

const accountSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : User,
        required : true
    },

    balance : {
        required : true,
        type : number
    }
})


const User = mongoose.model("User",UserSchema)
const Account = mongoose.model("Account", accountSchema)

module.exports = {
    User,
    Account,
}




