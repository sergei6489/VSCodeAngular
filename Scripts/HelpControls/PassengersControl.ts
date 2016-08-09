import {Component,Input, Output} from "@angular/core"
import {FORM_DIRECTIVES,REACTIVE_FORM_DIRECTIVES, FormGroup,FormBuilder, FormControl,Validators} from '@angular/forms';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_CHECKBOX_DIRECTIVES } from "@angular2-material/checkbox";
import {MdInput} from "@angular2-material/input";
import {MD_LIST_DIRECTIVES} from "@angular2-material/list";
import {MD_TOOLBAR_DIRECTIVES} from "@angular2-material/toolbar";
import {MD_SLIDE_TOGGLE_DIRECTIVES} from "@angular2-material/slide-toggle";
import {MD_BUTTON_DIRECTIVES} from "@angular2-material/button";
import {MdIcon,MdIconRegistry} from "@angular2-material/icon";
import {Passenger} from "../ViewModels/Passenger";

@Component({
    providers:[FormBuilder,MdIconRegistry],
    directives:[
        MD_CARD_DIRECTIVES,
        MD_CHECKBOX_DIRECTIVES,
        MdInput,
        MdIcon,
        MD_LIST_DIRECTIVES,
        MD_TOOLBAR_DIRECTIVES,
        MD_SLIDE_TOGGLE_DIRECTIVES,
        MD_BUTTON_DIRECTIVES,
        REACTIVE_FORM_DIRECTIVES,
        FORM_DIRECTIVES],
    selector:"passengers-control",
    template:`<div class="offset-md-3 offset-sm-3 col-md-5 col-sm-5" style="padding-left:15px">                   
                     <md-list>
                            <md-list-item>                                
                                <md-checkbox [checked]="selected" [hidden]="passengers.length==0" (click)="selectAllPassenger()"></md-checkbox>
                                <button md-icon-button color="warn" [hidden]="passengers.length==0" (click)="removeSelectedPassenger(passenger)" >
                                    <i class="material-icons" md-18>delete</i>
                                </button>
                            </md-list-item>
                         <md-divider></md-divider>
                            <md-list-item *ngFor='let passenger of passengers'>
                            <md-checkbox [checked]="passenger.isSelect"> </md-checkbox>
                                <h4 md-line>{{passenger.name}} </h4>
                                <h4 md-line>{{passenger.surname}} </h4>
                                <h4 md-line>{{passenger.age}} </h4>
                                <button md-icon-button (click)="removePassenger(passenger)" >
                                    <i class="material-icons" md-24>delete</i>
                                </button>
                            </md-list-item>
                    </md-list>
                    
                    <div class="card clearfix">
                        <div class="card-header">
                            <h4>
                                <label>Add passenger</label>
                            </h4>
                        </div>
                        <div class="card-block">
                            <form [formGroup]="myForm" class="form-horizontal">
                                <div class="form-group clearfix">
                                   <label class="col-md-2">Name:</label>
                                   <div class="col-md-7">
                                        <input class="form-control" placeholder="Name" [formControl]="namefc" [(ngModel)]="currentPassenger.name" >
                                   </div>
                                </div>
                                <div class="form-group clearfix">
                                    <label class="col-md-2">SurName:</label>
                                   <div class="col-md-7">
                                        <input class="form-control" placeholder="SurName" [formControl]="surnamefc" [(ngModel)]="currentPassenger.surname" >
                                    </div>
                                </div>
                                <div class="form-group clearfix">
                                    <label for="example-number-input" class="col-md-2 col-form-label">Number</label> 
                                    <div class="col-md-3">                                    
                                        <input class="form-control" type="number" value="42" id="example-number-input">
                                    </div>
                                 </div>
                                  <div class="form-group">
                                        <div class="checkbox">
                                            <label>
                                            <input type="checkbox"> IsMale
                                            </label>
                                        </div>
                                 </div> 
                                <div class="form-group clearfix">
                                    <div class="pull-right">
                                        <button class="btn"  (click)="saveEditing()">Save</button>
                                        <button class="btn">Clear</button>
                                    </div>
                                </div> 
                            </form>
                        </div> 
            </div>`
})  

export class PassengersControl
{
    @Input() passengers: Array<Passenger>;
    currentPassenger: Passenger;
    isNew: boolean;
    selected: boolean;

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
        this.selected = false;
    }
    buildForm()
    {
        this.namefc = new FormControl('', Validators.required);
        this.surnamefc = new FormControl('', Validators.required);
        this.agefc = new FormControl(18, Validators.required);
        this.ismalefc = new FormControl(true, Validators.required);
        this.myForm = this.fb.group({
            "namefc": this.namefc,
            "surnamefc": this.surnamefc,
            "agefc": this.agefc,
            "ismalefc": this.ismalefc,
        });
    }

    addNewPassenger()
    {
        this.currentPassenger = new Passenger(0, '', '', 0, false);
        this.isNew=true;
    }

    removePassenger(item:Passenger)
    {
        this.passengers.splice(this.passengers.indexOf(item),1);
    }

    editPassenger(item: Passenger)
    {
        this.currentPassenger = new Passenger(item.id, item.name, item.surname, item.age, item.isMale);
        this.isNew = false;
    }

    selectAllPassenger()
    {
        var self = this;
        this.passengers.forEach(n=>
        {   
            n.isSelect = self.selected;
        });
    }

    removeSelectedPassenger()
    {
        this.selected = false;
        this.passengers.forEach(item=>
        {   
            if (item.isSelect)
            {
                this.passengers.splice(this.passengers.indexOf(item),1);
            }
        });
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
            this.passengers.forEach(n=>
            {
                if (n.id == this.currentPassenger.id)
                {
                    n.updatePassenger(this.currentPassenger);
                }
            });
            }
        }     
    }
}