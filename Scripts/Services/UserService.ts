import { Injectable } from "@angular/core";
import { Http, Headers,RequestOptions} from "@angular/http";
import {BaseService} from "./BaseService";
import {User} from "../ViewModels/UserViewModel";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService extends BaseService
{
    public constructor(http: Http)
    {
        super(http);
    }

    logIn(name:string,password: string)
    {
        return this.http.post("user/login",JSON.stringify( {name:name,password:password  }),this.options)
        .map(this.ExtractData).catch(this.handleError);
    }

    logOff()
    {
         return this.http.get('user/logoff').map(res => res.json(), this.headers);
    }

    register(user: User)
    {
        return this.http.post("user/register",JSON.stringify( user ),this.options)
        .toPromise().then(response => response.json()).catch(this.handleError);
    }

    deleteUser(name: string)
    {
       return this.http.get( 'user/deleteUser?name=' + name ).map(this.ExtractData).catch(this.handleError);
    }

    getUsers()
    {
        return this.http.get('user/getAll').map(this.ExtractData).catch(this.handleError);
    }

    checkIsAuth()
    {
        return this.http.get('user/checkIsAuth').map(this.ExtractData).catch(this.handleError);
    }

    checkIsLoginExists(login: string)
    {
        return this.http.get('user/checkIsLoginExists/'+login).toPromise().then(response => response.json()).catch(this.handleError);
    }
}