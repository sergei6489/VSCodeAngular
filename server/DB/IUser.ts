import mongoose = require("mongoose");

class User extends mongoose.Document
{
     login:string;
     password:string;
     bithday: Date;
     isMale: boolean;
     email:string;
}

export = User;