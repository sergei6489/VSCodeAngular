import mongoose = require("mongoose");

class User extends mongoose.Document
{
     name:string;
     password:string;
     bithday: Date;
     isMale: boolean;
     email:string;
}

export = User;