import 'reflect-metadata';
import {IUserService} from "./IUserService";
import {UserViewModel} from "../dataModels/UserViewModel";
import { injectable, inject } from "inversify";
import _userSchema = require('../DB/userSchema');
import User = require("../DB/IUser")
import DBAccess = require("../DB/mongodb");
import mongoose = require("mongoose");


@injectable()
export class UserService implements IUserService
{
    public GetUserById( id:string, callback: (error: any, result: User)=>void )
    {
        _userSchema.findById(id,callback);
    }
    public CheckUser( login:string,password:string,callback: (error: any,result: User)=>void )
    {
        _userSchema.findOne({login:login,password:password},callback);
    }
    public IsExistsUser( login:string, callback: (error:any, result: User)=>void )
    {
        _userSchema.findOne({'login':login},callback);
    }
    public Register(user: UserViewModel,callback: (error:any, result:any)=>void )
    {

        this.IsExistsUser(user.name,(error,result)=>{
            if (result==null)
            {
               var newUser = new _userSchema({
                    login : user.name,
                    password : user.password,
                    bithday : this.ConvertStringToDate(user.bithday.toString()),
                    isMale : true,
                    email : user.email,
                });
                newUser.save(callback); 
            }
            else
            {
                callback("duplicate",null);
            }
        });

        
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
        _userSchema.count({"login" : login}, (count)=>callback(count>0));
    }

    private ConvertStringToDate(text: string): Date
    {
        if (text!=null)
        {
            var array = new Array<number>();
            text.split('.').forEach(n=> array.push(Number.parseInt(n)));
            return new Date(array[2],array[1],array[0]);
        }
        else
        {
            return null;
        }
    }
    
}