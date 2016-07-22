import {Component,Input, Output} from "@angular/core"
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_CHECKBOX_DIRECTIVES } from "@angular2-material/checkbox";
import {MdInput} from "@angular2-material/input";
import {MD_LIST_DIRECTIVES} from "@angular2-material/list";
import {Passenger} from "../ViewModels/Passenger";

@Component({
    directives:[MD_CARD_DIRECTIVES,MD_CHECKBOX_DIRECTIVES,MdInput,MD_LIST_DIRECTIVES],
    selector:"passengers-control",
    template:`<div class="col-md-offset-1 col-sm-offset-1 col-md-9 col-sm-9" style="padding-left:15px">
         

                  
                    <md-input  placeholder="What do you need to do?" ></md-input>
               
                 
                </div>`
})

export class PassengersControl
{
    @Input() passengers: Array<Passenger>;
    currentPassenger: Passenger;
    isNew: boolean;

    constructor()
    {
        this.addNewPassenger();
    }


    addNewPassenger()
    {
        this.currentPassenger = new Passenger();
        this.isNew=true;
    }

    removePassenget(item:Passenger)
    {
        this.passengers.slice(this.passengers.indexOf(item),1);
    }

    editPassenger(item: Passenger)
    {
        this.currentPassenger = item;
        this.isNew = false;
    }
}