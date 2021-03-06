import {Http, Headers, Response, RequestOptions} from "@angular/http";
import { Observable }  from 'rxjs/Observable';
import { Injectable } from "@angular/core"

@Injectable()
export class BaseService
{
    protected headers : Headers;
    protected options: RequestOptions;

    public constructor (protected http: Http){
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.options = new RequestOptions({ headers: this.headers });
    }

    protected ExtractData(res: Response) {
        if (res.status < 200 || res.status >= 300)
            throw new Error('Response error:' + res.status);
        let result = res.json();
        return result || {};
    }
    
    protected handleError(error: any) {
        let errMsg = error.message || 'Server error';
        console.error(errMsg); 
        return Observable.throw(errMsg);
    }
}