import {Component,OnInit} from "@angular/core";
import {globalVariables} from "./globalVariables";
import {UserService} from "./Services/UserService";

@Component({
    selector: "myApp",
    template: ` <nav class="navbar navbar-dark bg-primary navbar-fixed-top">
        <div class="container-fluid">
            <button (click)="showMenu()" class="navbar-brand navbar-toggler" type="button" data-toggle="collapse" data-target="#sidebar-wrapper">☰</button>
            <a class="navbar-brand" href="#">Shipments</a>
            <ul class="nav navbar-nav pull-xs-right hidden-xs-up">
                <li class="nav-item">
                    <a class="nav-link" style="font-size: 14px;" href="#">Register</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Login<strong class="caret"></strong></a>
                    <div class="dropdown-menu" style="padding: 15px;">
                        <form action="#" method="post" class="form-horizontal navbar-form">
                            <input class="form-control margin-top" name="UserName" placeholder="Email" />
                            <input class="form-control margin-top" name="Password" placeholder="Password" />
                            <input type="submit" class="btn btn-success margin-top pull-right" value="Войти" />
                        </form>
                    </div>
                </li>
                <li></li>
            </ul>
         </div>
    </nav>
     <div id="sidebar-wrapper1"  [class.active]="menuActive==true">
        <div class="list-group">
        <a href="#" [hidden]="!isAuth || !isAdmin" class="list-group-item list-group-item-action">
                <span class="fa fa-users"> </span> Shipments </a>
            <a href="#" (click)="hideMenu()" [hidden]="!isAuth || !isAdmin" class="list-group-item list-group-item-action">
                <span class="fa fa-users"> </span> Users </a>
            <a routerLink="/login" (click)="hideMenu()" [hidden]="isAuth" class="list-group-item list-group-item-action">
                  <span class="fa fa-sign-in fa-3"></span> Login</a>
            <a routerLink="/register" (click)="hideMenu()" [hidden]="isAuth" class="list-group-item list-group-item-action"> 
                <span (click)="hideMenu()" class="fa fa-sign-language"></span> Register</a>
            <a href="#" [hidden]="!isAuth" class="list-group-item list-group-item-action" (click)="LogOff()">LogOff</a>
        </div>
     </div>
    <div class="container-fluid" style="margin-top:60px;">
        <router-outlet></router-outlet>
    </div>`
})

export class appMain implements OnInit {
    public menuActive: boolean;
    public isAdmin: boolean;
    public isAuth: boolean;
    constructor(private globalVariables: globalVariables,private userService: UserService ) {
        
    }

    ngOnInit()
    {
        this.globalVariables.isAdminChanged.subscribe(data=>{
            this.isAdmin = data;
        })
        this.globalVariables.isAuthChanged.subscribe(data=>{
            this.isAuth = data;
        })
    }

    showMenu()
    {
        this.menuActive = !this.menuActive;
    }

    hideMenu()
    {
        this.menuActive = false;
    }

    LogOff()
    {
        this.userService.logOff().then(data=>{
            if (data)
            {
                this.globalVariables.isAdmin = false;
                this.globalVariables.isAuth = false;
            }
        })
    }
}