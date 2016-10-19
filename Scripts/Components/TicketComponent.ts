import { Component } from '@angular/core';
import { PassengersControl } from '../HelpControls/PassengersControl';
import { Passenger } from '../ViewModels/Passenger';

@Component({
    template:"<passengers-control [passengers]='passengers'></passengers-control>"
})

export class TicketComponent {
    passengers: Array<Passenger>;

    constructor()
    {
        this.passengers = [];
    }
}

