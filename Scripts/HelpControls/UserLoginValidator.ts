import {Validator} from "@angular/forms";
import {UserService} from "../Services/UserService";

export class UserLoginValidator implements Validator
{

    public constructor( public service: UserService){

    }

    validate(control)
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
}