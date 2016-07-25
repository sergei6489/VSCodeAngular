import { Component } from '@angular/core';
import { PassengersControl } from '../HelpControls/PassengersControl';
import { Passenger } from '../ViewModels/Passenger';
import {MdInput} from "@angular2-material/input";

@Component({
    template:"<passengers-control [passengers]='passengers'></passengers-control>",
    directives:[PassengersControl,MdInput]
})

export class TicketComponent {
    passengers: Array<Passenger>;

    constructor()
    {
        this.passengers = [];
    }
}

