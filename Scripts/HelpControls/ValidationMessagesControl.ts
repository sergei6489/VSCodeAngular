import {Component, Input} from "@angular/core";
import {FormControl} from "@angular/forms";
import {ValidationService} from "../Services/ValidationService";

@Component({
    template:"<div *ngIf='errorMessage !== null'>{{errorMessage}}</div>",
    selector:"validationMessage"

})

export class ValidationsMessagesControl
{
    @Input() control: FormControl;

    get errorMessage()
    {
        for (let propertyName in this.control.errors)
        {
            if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
                return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
            }
        }
    }
}