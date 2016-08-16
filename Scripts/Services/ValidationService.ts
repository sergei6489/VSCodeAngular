import {UserService} from "./UserService";
import {Injectable} from "@angular/core";

@Injectable()
export class ValidationService
{
    public constructor(public service: UserService)
    {

    }

    userLoginValidator(control)
    {
        if (control.value === undefined || control.value === "" )
        {
            return { 'invalidLogin': true };
        }
        else if (this.service.checkIsLoginExists(control.value))
        {
            return { 'invalidLogin': true };
        }else
        {
            return null;
        }
    }

    getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
        let config = {
            'required': 'Required',
            'invalidLogin':'UserLoginBusy',
            'invalidEmailAddress': 'Invalid email address',
            'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
            'minlength': `Minimum length ${validatorValue.requiredLength}`
        };

        return config[validatorName];
    }

    emailValidator(control) {
        if (control.value !== undefined && control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        } else {
            return { 'invalidEmailAddress': true };
        }
    }

    passwordValidator(control) {
        if ( control.value != undefined && control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
            return null;
        } else {
            return { 'invalidPassword': true };
        }
    }
}