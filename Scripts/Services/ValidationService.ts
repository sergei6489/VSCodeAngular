import {UserService} from "./UserService";
import {Injectable} from "@angular/core";

export  class ValidationService
{

   static userLoginValidator(control, service: UserService)
    {
            return new Promise((resolve,reject)=>
            {
                
                    if (control.value === undefined || control.value === "" )
                    {
                        resolve({ 'invalidLogin': true });
                    }
                    else 
                    {
                        service.checkIsLoginExists(control.value).then(result=>
                        {
                            setTimeout(function() 
                            {
                                if (result==true)
                                {
                                    resolve( { 'invalidLogin': true });
                                } else{
                                    resolve(null);
                                }
                            }, 1000);
                        });
                       
                    } 
                   
             });  
    }

   static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
        let config = {
            'required': 'Required',
            'invalidLogin':'UserLoginBusy',
            'invalidEmailAddress': 'Invalid email address',
            'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
            'invalidMinPrice': 'InCorrect min price',
            'invalidMaxPrice':'Invalid max price',
            //'minlength': `Minimum length ${validatorValue.requiredLength}`
        };

        return config[validatorName];
    }

   static emailValidator(control) {
        if (control.value !== undefined && control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        } else {
            return { 'invalidEmailAddress': true };
        }
    }

   static passwordValidator(control) {
        if ( control.value != undefined && control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
            return null;
        } else {
            return { 'invalidPassword': true };
        }
    }

    static minNumberValueValidator(control,maxValue: number,minValue: number)
    {
        var value = Number.parseInt(control.value);
        if ( isNaN( value ) && value < maxValue && value>minValue)
        {
            return {  'invalidMinPrice': true };
        }
        else{
            return null;
        }
    }

    static maxNumberValueValidator(control,maxValue: number,minValue: number)
    {
        var value = Number.parseInt(control.value);
        if ( isNaN( value ) && value < maxValue && value>minValue)
        {
            return {  'invalidMaxPrice': true };
        }
        else{
            return null;
        }
    }
}