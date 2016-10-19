import {Component} from "@angular/core";
import {FormsModule,FormControl,FormBuilder,FormGroup,Validators} from "@angular/forms";
import {UserService} from "../Services/UserService";
import {User} from "../ViewModels/UserViewModel";
import {DateTimeControl} from "../HelpControls/DateTimeControl";
import {ValidationsMessagesControl} from "../HelpControls/ValidationMessagesControl";
import {ValidationService} from "../Services/ValidationService";
import {UserLoginValidator} from "../HelpControls/UserLoginValidator"
import { Inject } from "@angular/core"

@Component({
        template:`<div class="offset-md-4 col-md-4">
                    <div class="card">
                        <div class="card-header">Registration</div>
                        <div class="card-block">
                            <form [formGroup]="form" class="form-horizontal">
                                <div class="form-group" [class.has-danger]="namefc.dirty && !namefc.valid">
                                <label>Name</label>
                                    <input [(ngModel)]="newUser.name" formControlName="namefc" class="form-control form-control-danger" >
                                        <validationMessage [control]="namefc"></validationMessage>
                                </div>
                                <div class="form-group" [class.has-danger]="passwordfc.dirty && !passwordfc.valid">
                                <label>Password</label>
                                    <input [(ngModel)]="newUser.password" formControlName="passwordfc" class="form-control form-control-danger" >
                                        <validationMessage [control]="passwordfc"></validationMessage>
                                </div>
                                <div class="form-group" [class.has-danger]="emailfc.dirty && !emailfc.valid">
                                    <label>Email</label>
                                    <input [(ngModel)]="newUser.email" formControlName="emailfc" class="form-control form-control-danger" >
                                        <validationMessage [control]="emailfc"></validationMessage>
                                </div>
                                <div class="form-group" [class.has-danger]="bithdayfc.dirty && !bithdayfc.valid">
                                    <label>Birthday</label>
                                    <DateTimePicker [(ngModel)]="newUser.bithday" formControlName="bithdayfc"> </DateTimePicker>
                                    <validationMessage [control]="bithdayfc"></validationMessage>
                                </div>
                                <div class="form-group">
                                    <label>IsMale</label>
                                    <input type="checkbox" style="display:block"  [(ngModel)]="newUser.isMale" formControlName="isMalefc">
                                </div>
                            </form>
                        </div>
                        <div class="card-footer">
                               <div class="pull-md-right">
                                    <button class="btn btn-outline-primary" (click)="register()">Register</button>
                                    <a routerLink="/login" class="btn btn-outline-primary">Log in</a>
                                </div>
                        </div>
                    </div>
            </div>`
})

export class UserRegisterComponent {
    newUser = new User();

    form : FormGroup;
    namefc = new  FormControl('',Validators.compose([Validators.required, this.validator]) );
    passwordfc = new  FormControl('', Validators.compose([Validators.required,ValidationService.passwordValidator]));
    emailfc = new  FormControl('', Validators.compose([Validators.required,ValidationService.emailValidator]));
    bithdayfc = new  FormControl('', Validators.required);
    isMalefc = new FormControl('');

    public constructor (@Inject('NameValidator') private validator,fb:FormBuilder,private service: UserService,public validationService: ValidationService ){
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