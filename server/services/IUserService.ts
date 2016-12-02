import {UserViewModel} from "../dataModels/UserViewModel"
import IUser = require("../DB/IUser")

export interface IUserService
{
    GetUserById( id:number, callback: (error: any, result: IUser)=>void );
    GetUserByLogin( login:string,callback: (error: any,result: IUser)=>void );
    IsExistsUser( login:string, password: string ): boolean;
    Register(user: UserViewModel): boolean;
    DeleteUser(name: string):boolean;
    getAllUser(): Array<UserViewModel>;
    IsLoginBusy(login: string, callback: (error: any, result:boolean)=> void);
}