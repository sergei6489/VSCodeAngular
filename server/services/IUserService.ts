import {UserViewModel} from "../dataModels/UserViewModel"

export interface IUserService
{
    GetUserById( id:number ): UserViewModel;
    GetUserByLogin( login:string ): UserViewModel;
    GetUser( login:string, password: number ): UserViewModel;
}