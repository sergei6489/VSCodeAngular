import 'reflect-metadata';
import {IUserService} from "./IUserService";
import {UserViewModel} from "../dataModels/UserViewModel";
import { injectable, inject } from "inversify";
import _userSchema = require('../DB/userSchema');
import User = require("../DB/IUser")

@injectable()
export class UserService implements IUserService
{
    public GetUserById( id:string, callback: (error: any, result: User)=>void )
    {
        _userSchema.findById(id,callback);
    }
    public GetUserByLogin( login:string,callback: (error: any,result: User)=>void )
    {
        _userSchema.findOne({login:login},callback);
    }
    public IsExistsUser( login:string, password: string, callback: (error:any, result: User)=>void )
    {
        _userSchema.findOne({login:login,password:password},callback);
    }
    public Register(user: UserViewModel,callback: (error:any, result:any)=>void )
    {
        var newUser = new User();
        newUser.name = user.name;
        newUser.password = user.password;
        newUser.bithday = user.bithday;
        newUser.isMale = user.isMail;
        newUser.email = user.email;
        _userSchema.create(newUser,callback);
    }

    public DeleteUser(name: string,callback: (error:any)=>void)
    {
        _userSchema.remove({login: name}, callback);
    }

    public getAllUser( pageIndex: number, listCount: number , callback: (error:any, result: Array<User>,totalPageCount: number)=>void )
    {    
        _userSchema.count({},(err,count)=>
        {
            var pageCount = count / listCount;
            _userSchema.find({}).skip(pageIndex * listCount)
            .limit(listCount).exec((error,docs)=>
            {
                callback(null,docs,count);
            });
        });
    }

    public IsLoginBusy(login: string, callback: (result:boolean)=> void)
    {
        _userSchema.count({login : login}, (count)=>callback(count>0));
    }
    
}