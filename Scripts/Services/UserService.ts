import { Injectable } from "@angular/core";
import { Http, Headers,RequestOptions} from "@angular/http";
import {BaseService} from "./BaseService";

@Injectable()
export class UserService extends BaseService
{
    logIn(name:string,password: string)
    {
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.options = new RequestOptions({ headers: this.headers });
        return this.http.post("/users/login",JSON.stringify( {name:name,password:password  }),this.options)
        .map(this.ExtractData).catch(this.handleError);
    }

    logOff()
    {
         return this.http.get('/users/logoff').map(res => res.json(), this.headers);
    }

    register(name: string,password: string)
    {
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.options = new RequestOptions({ headers: this.headers });
        return this.http.post("/users/register",JSON.stringify( {name:name,password:password  }),this.options)
        .map(this.ExtractData).catch(this.handleError);
    }
}