import {UserViewModel} from "../dataModels/UserViewModel"
import IUser = require("../DB/IUser")

export interface IUserService
{
    GetUserById( id:string, callback: (error: any, result: IUser)=>void );
    GetUserByLogin( login:string,callback: (error: any,result: IUser)=>void );
    IsExistsUser( login:string, password: string, callback: (error:any, result: boolean)=>void );
    Register(user: UserViewModel): boolean;
    DeleteUser(name: string):boolean;
    getAllUser(pageIndex:number,callback: (error:any, result: Array<IUser>)=>void);
    IsLoginBusy(login: string, callback: (error: any, result:boolean)=> void);
}