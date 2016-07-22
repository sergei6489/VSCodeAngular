import { Component } from '@angular/core';
import { PassengersControl } from '../HelpControls/PassengersControl';
import { Passenger } from '../ViewModels/Passenger';
import {MdInput} from "@angular2-material/input";

@Component({
    template:"<md-input  placeholder='What do you need to do?' ></md-input>",
    directives:[PassengersControl,MdInput]
})

export class TicketComponent {
    passengers: Array<Passenger>;

    constructor()
    {
        this.passengers = [];
    }
}

