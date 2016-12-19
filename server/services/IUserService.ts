import {UserViewModel} from "../dataModels/UserViewModel"
import IUser = require("../DB/IUser")

export interface IUserService
{
    GetUserById( id:string, callback: (error: any, result: IUser)=>void );
    CheckUser( login:string,password:string,callback: (error: any,result: IUser)=>void );
    IsExistsUser( login:string, callback: (error:any, result: IUser)=>void );
    Register(user: UserViewModel,callback: (error:any, result:any)=>void);
    DeleteUser(name: string,callback: (error:any)=>void);
    getAllUser(pageIndex: number, listCount: number , callback: (error:any, result: Array<IUser>,totalPageCount: number)=>void);
    IsLoginBusy(login: string, callback: (result:boolean)=> void);
}