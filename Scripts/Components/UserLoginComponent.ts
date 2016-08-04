import {Component} from "@angular/core"
import{UserService} from "../Services/UserService" 
import global = require("../globalVariables")

   @Component({
       providers:[UserService],
        template:`<div class"card">
            <div class="card-header">Authorization</div>
            <div class="card-block">
               <form class="form-horizontal">
                    <div class="form-group">
                        <label> Name </label>
                        <input class="form-control">{{name}}</input>
                    </div>
                    <div>
                        <label>Password</label>
                        <input class="form-control">{{password}}</input>
                    </div>
               </form
            </div>
            <div class="card-footer">
                <button class="btn btn-primary">Log in</button>
                <button class="btn btn-primary">Register</button>
            </div>
        </div>`
    })
export class UserLoginComponent {
    public name: string;
    public password:string;

    public constructor(public service: UserService){    
    }

    logIn()
    {
        this.service.logIn(this.name,this.name).subscribe(res=> {global.isAuth = res});
    }
}