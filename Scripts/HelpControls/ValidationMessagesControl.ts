import {Component, Input} from "@angular/core";
import {FormControl} from "@angular/forms";
import {ValidationService} from "../Services/ValidationService";

@Component({
    template:"<div *ngIf='errorMessage !== null'><p>{{errorMessage}}</p></div>",
    selector:"validationMessage",
    styles:["p { font-size: 11px; color: red;}"]

})

export class ValidationsMessagesControl
{
    @Input() control: FormControl;

    get errorMessage()
    {
        for (let propertyName in this.control.errors)
        {
            if (this.control.errors.hasOwnProperty(propertyName) && this.control.dirty) {
                return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
            }
        }
    }
}