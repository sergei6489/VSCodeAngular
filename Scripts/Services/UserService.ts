import { Injectable } from "@angular/core";
import { Http, Headers,RequestOptions} from "@angular/http";
import {BaseService} from "./BaseService";

@Injectable()
export class UserService extends BaseService
{
    logIn(name:string,password: string)
    {
        return this.http.post("/users/login",JSON.stringify( {name:name,password:password  }),this.options)
        .map(this.ExtractData).catch(this.handleError);
    }

    logOff()
    {
         return this.http.get('/users/logoff').map(res => res.json(), this.headers);
    }

    register(name: string,password: string)
    {
        return this.http.post("/users/register",JSON.stringify( {name:name,password:password  }),this.options)
        .map(this.ExtractData).catch(this.handleError);
    }

    deleteUser(name: string)
    {
       return this.http.get( '/users/deleteUser?name=' + name ).map(this.ExtractData).catch(this.handleError);
    }

    getUsers()
    {
        return this.http.get('/users/getAll').map(this.ExtractData).catch(this.handleError);
    }
}