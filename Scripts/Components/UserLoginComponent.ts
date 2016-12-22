import {Component} from "@angular/core";
import {FormBuilder,FormControl,FormGroup,Validators} from "@angular/forms";
import {UserService} from "../Services/UserService" 
import {globalVariables} from "../globalVariables"
import {ValidationsMessagesControl} from "../HelpControls/ValidationMessagesControl"
import {Router} from "@angular/router"

   @Component({
        template:`<div class="offset-md-4 col-md-4" style="margin-top:85px;">
                    <form [formGroup]="form" class="form-horizontal" (submit)="logIn()">
                    <div class="card">
                    <div class="card-header">Authorization
                    <a routerLink="/register" class="hidden-md-down pull-right" style="cursor: pointer">
                                <i class="fa fa-arrow-right"></i>Registration 
                        </a>
                    </div>
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
                            <button class="btn btn-outline-success offset-md-5" type="submit">Log in</button>
                    </div>
                </div> </form></div>`
    })
export class UserLoginComponent {
    public name: string;
    public password:string;

    form: FormGroup;
    namefc = new FormControl('',Validators.required);
    passwordfc = new FormControl('',Validators.required);

    public constructor(public service: UserService,fb: FormBuilder, private globalVariables: globalVariables, public router: Router){   
       this.form = fb.group({
           "namefc" : this.namefc,
           "passwordfc" : this.passwordfc
        });
    }

    logIn()
    {
        if (this.form.valid)
        {
            this.service.logIn(this.name,this.password).then(data=>
            {
                this.globalVariables.isAuth = data.isAuth;
                this.globalVariables.isAdmin = data.isAdmin;
                if (!data.isAuth)
                {
                    this.namefc.setErrors({"loginFaild":true});
                }
                else
                {
                     this.router.navigate(['/']);
                }
            })
        }
        else{
            this.namefc.markAsDirty();
            this.passwordfc.markAsDirty();
        }
    }
}