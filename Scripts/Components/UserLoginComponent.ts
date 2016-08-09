import {Component} from "@angular/core"
import {FormBuilder,FormControl,FormGroup,Validators,REACTIVE_FORM_DIRECTIVES,FORM_DIRECTIVES} from "@angular/forms"
import{UserService} from "../Services/UserService" 
import global = require("../globalVariables")

   @Component({
       providers:[UserService],
       directives:[REACTIVE_FORM_DIRECTIVES,FORM_DIRECTIVES],
        template:`<div class="offset-md-4 col-md-4" style="margin-top:85px;">
                        <div class="card">
                    <div class="card-header">Authorization</div>
                    <div class="card-block">
                    <form [formGroup]="form" class="form-horizontal">
                            <div [className]="namefc.dirty && !namefc.valid ? 'form-group has-danger': 'form-group'">
                                <label> Name </label>
                                <input [(ngModel)]="name" formControlName="namefc"
                                [className]="'form-control form-control-danger'">
                                <div *ngIf="namefc.dirty && !namefc.valid">
                                    <p class="error-text"> Please, write your login </p>
                                </div>
                            </div>
                            <div>
                                <label>Password</label>
                                <input [(ngModel)]="password" formControlName="passwordfc" class="form-control">
                            </div>
                    </form>
                    </div>
                    <div class="card-footer">
                        <div class="pull-md-right">
                            <button class="btn btn-primary" (click)="logIn()">Log in</button>
                            <button class="btn btn-primary">Register</button>
                        </div>
                    </div>
                </div></div>`
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