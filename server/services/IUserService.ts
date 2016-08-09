import {UserViewModel} from "../dataModels/UserViewModel"

export interface IUserService
{
    GetUserById( id:number ): UserViewModel;
    GetUserByLogin( login:string ): UserViewModel;
    IsExistsUser( login:string, password: string ): boolean;
    Register(user: UserViewModel): boolean;
    DeleteUser(name: string):boolean;
}