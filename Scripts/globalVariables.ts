import {Injectable,EventEmitter} from  "@angular/core";
import {UserService} from "./Services/UserService";

@Injectable()
export class globalVariables  {
    private _isAuth=false;
    private _isAdmin=false;


    public isAdminChanged = new EventEmitter<boolean>();
    public isAuthChanged = new EventEmitter<boolean>();

    public constructor(public service: UserService)
    {
        this.syncronize();
    }

    public syncronize()
    {
        this.service.checkIsAuth().subscribe(res=>{
            this.isAdmin = res.isAdmin;
            this.isAuth = res.isAuth;
        });
    }

    get isAuth()
    {
        return this._isAuth;
    }

    get isAdmin()
    { 
        return this._isAdmin;
    }

    set isAuth(value)
    {
        if (this._isAuth!=value)
        {
            this._isAuth = value;
            this.isAuthChanged.emit(value);
        }
    }

    set isAdmin(value)
    {
        if (this._isAdmin != value)
        {
            this._isAdmin = value;
            this.isAdminChanged.emit(value);
        }
    }
}
