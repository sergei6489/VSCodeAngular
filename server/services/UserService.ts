import 'reflect-metadata';
import {IUserService} from "./IUserService";
import {UserViewModel} from "../dataModels/UserViewModel";
import { injectable, inject } from "inversify";

@injectable()
export class UserService implements IUserService
{
    public GetUserById( id:number ): UserViewModel
    {
        return null;
    }
    GetUserByLogin( login:string ): UserViewModel
    {
        return null;
    }
    IsExistsUser( login:string, password: string ): boolean
    {
        return true;
    }
    Register(user: UserViewModel): boolean
    {
        return true;
    }
    DeleteUser(name: string):boolean
    {
        return true;
    }
    getAllUser(): Array<UserViewModel>
    {
        return null;
    }
}