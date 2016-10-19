import {Component} from "@angular/core";
import {FormBuilder,FormControl,FormGroup,Validators} from "@angular/forms";
import {UserService} from "../Services/UserService" 
import global = require("../globalVariables")
import {ValidationsMessagesControl} from "../HelpControls/ValidationMessagesControl"

   @Component({
        template:`<div class="offset-md-4 col-md-4" style="margin-top:85px;">
                    <form [formGroup]="form" class="form-horizontal" (submit)="logIn()">
                    <div class="card">
                    <div class="card-header">Authorization</div>
                    <div class="card-block">
                            <div class="form-group" [class.has-danger]="namefc.dirty && !namefc.valid">
                                <label> Name </label>
                                <input [(ngModel)]="name" formControlName="namefc"
                                class='form-control form-control-danger'>
                                <validationMessage [control]="form.controls.namefc"></validationMessage>
                            </div>
                            <div class="form-group" [class.has-danger]="passwordfc.dirty && !passwordfc.valid">
                                <label>Password</label>
                                <input [(ngModel)]="password" formControlName="passwordfc" class="form-control form-control-danger">
                                <validationMessage [control]="form.controls.passwordfc"></validationMessage>
                            </div>
                    </div>
                    <div class="card-footer">
                        <div class="pull-md-right">
                            <button class="btn btn-outline-success" type="submit">Log in</button>
                            <a routerLink="/register" class="btn btn-outline-primary">Register</a>
                        </div>
                    </div>
                </div> </form></div>`
    })
export class UserLoginComponent {
    public name: string;
    public password:string;

    form: FormGroup;
    namefc = new FormControl('',Validators.required);
    passwordfc = new FormControl('',Validators.required);

    public constructor(public service: UserService,fb: FormBuilder){   
       this.form = fb.group({
           "namefc" : this.namefc,
           "passwordfc" : this.passwordfc
        });
    }

    logIn()
    {
        if (this.form.valid)
        {
            this.service.logIn(this.name,this.password).subscribe(res=> {global.isAuth = res});
        }
        else{
            this.namefc.markAsDirty();
            this.passwordfc.markAsDirty();
        }
    }
}