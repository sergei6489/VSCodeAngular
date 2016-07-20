import {IUserService} from "./IUserService";
import {UserViewModel} from "../dataModels/UserViewModel";
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
    GetUser( login:string, password: number ): UserViewModel
    {
        return null;
    }
}