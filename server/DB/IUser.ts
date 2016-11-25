import mongoose = require("mongoose");

interface IUser extends mongoose.Document
{
     name:string;
     password:string;
     bithday: any;
     isMale: string;
     email:string;
}

export = IUser;