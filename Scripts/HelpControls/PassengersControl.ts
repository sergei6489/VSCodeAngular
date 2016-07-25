import {Component,Input, Output} from "@angular/core"
import {FORM_DIRECTIVES,REACTIVE_FORM_DIRECTIVES, FormGroup,FormBuilder, FormControl,Validators} from '@angular/forms';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_CHECKBOX_DIRECTIVES } from "@angular2-material/checkbox";
import {MdInput} from "@angular2-material/input";
import {MD_LIST_DIRECTIVES} from "@angular2-material/list";
import {MD_TOOLBAR_DIRECTIVES} from "@angular2-material/toolbar";
import {MD_SLIDE_TOGGLE_DIRECTIVES} from "@angular2-material/slide-toggle";
import {MD_BUTTON_DIRECTIVES} from "@angular2-material/button";
import {Passenger} from "../ViewModels/Passenger";

@Component({
    providers:[FormBuilder],
    directives:[
        MD_CARD_DIRECTIVES,
        MD_CHECKBOX_DIRECTIVES,
        MdInput,
        MD_LIST_DIRECTIVES,
        MD_TOOLBAR_DIRECTIVES,
        MD_SLIDE_TOGGLE_DIRECTIVES,
        MD_BUTTON_DIRECTIVES,
        REACTIVE_FORM_DIRECTIVES,
        FORM_DIRECTIVES],
    selector:"passengers-control",
    template:`<div class="col-md-offset-3 col-sm-offset-3 col-md-5 col-sm-5" style="padding-left:15px">
                     <md-list>
                         <md-list-item *ngFor='let passenger of passengers'>
                            <h4 md-line>{{passenger.name}} </h4>
                            <h4 md-line>{{passenger.surname}} </h4>
                            <h4 md-line>{{passenger.age}} </h4>
                            <button md-icon-button color="warn" (click)="removePassenger(passenger)" >
                                <i class="material-icons" md-24>check</i>
                            </button>
                         </md-list-item>
                    </md-list>
                    <form [formGroup]="myForm">
                    <md-card >
                        <md-toolbar color="accent">Basic</md-toolbar>
                            <md-card-content>
                                <table style="width:100%" >
                                    <tr>
                                        <md-input style="width:100%"  placeholder="Name" [formControl]="namefc" [(ngModel)]="currentPassenger.name" ></md-input>
                                    </tr>
                                    <tr>   
                                        <md-input style="width:100%"  placeholder="SurName" [formControl]="surnamefc" [(ngModel)]="currentPassenger.surname" ></md-input>
                                    </tr>
                                    <tr>
                                        <md-input  placeholder="Age" ></md-input>
                                    </tr>
                                    <tr>
                                        <md-slide-toggle></md-slide-toggle>
                                    </tr>
                                </table>
                            </md-card-content>
                            <md-card-actions class="clearfix">
                                <button class="pull-right" md-raised-button (click)="saveEditing()">Save</button>
                                <button class="pull-right" md-raised-button>Clear</button>
                             </md-card-actions>
                    </md-card>   
                    </form>   
            </div>`
})  

export class PassengersControl
{
    @Input() passengers: Array<Passenger>;
    currentPassenger: Passenger;
    isNew: boolean;

    fb: FormBuilder;
    myForm: FormGroup;
    namefc: FormControl;
    surnamefc: FormControl;
    agefc: FormControl; 
    ismalefc: FormControl;

    constructor(fb: FormBuilder)
    {
        this.fb= fb;
        this.addNewPassenger();
        this.buildForm();
    }
    buildForm()
    {
        this.namefc = new FormControl(this.currentPassenger.name,Validators.required);
        this.surnamefc = new FormControl(this.currentPassenger.surname,Validators.required);
        this.agefc = new FormControl(this.currentPassenger.age);
        this.ismalefc = new FormControl(this.currentPassenger.isMale);
        this.myForm = this.fb.group({
            "namefc": this.namefc,
            "surnamefc": this.surnamefc,
            "agefc": this.agefc,
            "ismalefc": this.ismalefc,
        });
    }

    addNewPassenger()
    {
        this.currentPassenger = new Passenger();
        this.isNew=true;
    }

    removePassenger(item:Passenger)
    {
        this.passengers.splice(this.passengers.indexOf(item),1);
    }

    editPassenger(item: Passenger)
    {
        this.currentPassenger = item;
        this.isNew = false;
    }
    saveEditing()
    {
        if (this.myForm.valid)
        {
            if (this.isNew)
            {
                this.passengers.push(this.currentPassenger);
                this.addNewPassenger();
            }
            else
            {
            
            }
        }
        
    }
}