import {Component} from "@angular/core";
import {FORM_DIRECTIVES,FormControl,FormBuilder,FormGroup,REACTIVE_FORM_DIRECTIVES,Validators} from "@angular/forms";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {UserService} from "../Services/UserService";
import {User} from "../ViewModels/UserViewModel";
import {DateTimeControl} from "../HelpControls/DateTimeControl"

@Component({
        providers:[UserService],
        directives:[DateTimeControl,REACTIVE_FORM_DIRECTIVES,ROUTER_DIRECTIVES],
        template:`<div class="offset-md-4 col-md-4">
                    <div class="card">
                        <div class="card-header">Registration</div>
                        <div class="card-block">
                            <form [formGroup]="form" class="form-horizontal">
                                <div class="form-group">
                                <label>Name</label>
                                    <input [(ngModel)]="newUser.name" formControlName="namefc" class="form-control form-control-danger" >
                                        <div *ngIf="namefc.dirty && namefc.valid">
                                            <p class="error-text">Please, input name</p>
                                        </div>
                                </div>
                                <div class="form-group">
                                <label>Password</label>
                                    <input [(ngModel)]="newUser.password" formControlName="passwordfc" class="form-control form-control-danger" >
                                        <div *ngIf="namefc.dirty && passwordfc.valid">
                                            <p class="error-text">Please, input password</p>
                                        </div>
                                </div>
                                <div class="form-group">
                                    <label>Email</label>
                                    <input [(ngModel)]="newUser.email" formControlName="emailfc" class="form-control form-control-danger" >
                                        <div *ngIf="namefc.dirty && emailfc.valid">
                                            <p class="error-text">Please, input email</p>
                                        </div>
                                </div>
                                <div class="form-group">
                                    <label>Birthday</label>
                                    <DateTimePicker [(value)]="newUser.bithday" > </DateTimePicker>
                                </div>
                                <div class="form-group">
                                    <label>IsMale</label>
                                    <input type="checkbox"  [(ngModel)]="newUser.isMale" formControlName="isMalefc">
                                </div>
                            </form>
                        </div>
                        <div class="card-footer">
                               <div class="pull-md-right">
                                    <button class="btn btn-primary" (click)="register()">Register</button>
                                    <a routerLink="/login" class="btn btn-primary">Log in</a>
                                </div>
                        </div>
                    </div>
            </div>`
})

export class UserRegisterComponent {
    newUser = new User();

    form : FormGroup;
    namefc = new  FormControl('', Validators.required);
    passwordfc = new  FormControl('', Validators.required);
    emailfc = new  FormControl('', Validators.required);
    bithdayfc = new  FormControl('', Validators.required);
    isMalefc = new FormControl('',Validators.required);

    public constructor (fb:FormBuilder,private service: UserService){
        this.newUser.bithday = new Date();
        this.form = fb.group({
            "namefc" : this.namefc,
            "passwordfc" : this.passwordfc,
            "emailfc" : this.emailfc,
            "bithdayfc" : this.bithdayfc,
            "isMalefc": this.isMalefc
        });
    }

    register()
    {
        if (this.form.valid)
        {
            this.service.register(this.newUser);
        }
        else
        {
            this.namefc.markAsDirty();
            this.passwordfc.markAsDirty();
            this.emailfc.markAsDirty();
            this.bithdayfc.markAsDirty();
        }
    }
}