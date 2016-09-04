import mongoose = require("mongoose");


interface IUser extends mongoose.Document
{
     name:string;
     password:string;
     bithday: Date;
     isMale: string;
     email:string;
}


var _userSchema : mongoose.Schema = new mongoose.Schema({
     name: {
         type: String
        },
     password:{
         type: String
        },
     bithday: {
         type: Date
        },
     isMale: {
         type: Boolean
        },
     email:{
         type: String
        },
});

var _userModel = mongodb.model<>