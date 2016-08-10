import {Component} from "@angular/core";
import {FORM_DIRECTIVES,FormControl,FormBuilder,FormGroup,REACTIVE_FORM_DIRECTIVES,Validators} from "@angular/forms";
import {UserService} from "../Services/UserService";
import {User} from "../ViewModels/UserViewModel";
import {DateTimeControl} from "../HelpControls/DateTimeControl"

@Component({
        providers:[UserService],
        directives:[DateTimeControl],
        template:`<div class="offset-md-4 coll-md-4">
                    <div class="card">
                        <div class="card-header">Registration</div>
                        <div class="card-block">
                            <div class="form-horizontal">
                                <div class="form-group">
                                    <input [(ngModel)]="newUser.name" formControlName="namefc" class="form-control form-control-danger" >
                                        <div *ngIf="namefc.dirty && namefc.valid">
                                            <p class="error-text">Please, input name</p>
                                        </div>
                                </div>
                                <div class="form-group">
                                    <input [(ngModel)]="newUser.password" formControlName="passwordfc" class="form-control form-control-danger" >
                                        <div *ngIf="namefc.dirty && passwordfc.valid">
                                            <p class="error-text">Please, input password</p>
                                        </div>
                                </div>
                                <div class="form-group">
                                    <input [(ngModel)]="newUser.email" formControlName="emailfc" class="form-control form-control-danger" >
                                        <div *ngIf="namefc.dirty && emailfc.valid">
                                            <p class="error-text">Please, input email</p>
                                        </div>
                                </div>
                                <div class="form-group">
                                    <DateTimePicker [(value)]="newUser.bithday" [(ngModel)]="newUser.bithday" formControlName="bithday" class="form-control form-control-danger" > </DateTimePicker>
                                        <div *ngIf="bithdayfc.dirty && bithdayfc.valid">
                                            <p class="error-text">Please, input email</p>
                                        </div>
                                </div>
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