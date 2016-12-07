import mongoose = require("mongoose");

class User extends mongoose.Document
{
     name:string;
     password:string;
     bithday: any;
     isMale: boolean;
     email:string;
}

export = User;