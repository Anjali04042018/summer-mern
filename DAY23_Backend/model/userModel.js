const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email:{
        type:String,
        required: ["Email is required"],
        unique:true,
    },
    passsword:{
        type:String,
        required: ["password is required"],
    },
    createdAt:{
        type: Date,
        default:Date.now(),
    },
    updatedAt:{
        type:Date,
        default: Date.now(),
    },
});

const UserModel = mongoose.model("Users", userSchema);

module.exports = UserModel;