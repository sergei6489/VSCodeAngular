import mongoose = require("mongoose");
import IUser = require("./IUser");
import DBAccess = require("./mongodb");

var mongooseConnection = DBAccess.mongooseConnection;

var _userSchema : mongoose.Schema = new mongoose.Schema({
     login: {
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

var _userModel = mongooseConnection.model<IUser>("users",_userSchema);

export = _userModel;