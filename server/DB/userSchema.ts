import mongoose = require("mongoose");
import IUser = require("./IUser");

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
        }
});

var _userModel = mongoose.model<IUser>("users",_userSchema);

export = _userModel;