﻿///<reference path="../typings/tsd.d.ts" />
import {Component, Input} from '@angular/core';
import { Shipment } from '../ViewModels/ShipmentViewModel';
import { ElementRef } from '@angular/core';

@Component({
    selector: "shipment-detail",
    templateUrl: "app/partials/shipment-details.html",
    styles: [`
        .sidebar{
            position:fixed;
            bottom:0;
            top:50px;
            background-color:aliceblue;
        }
`]
})
export class ShipmentDetailComponent {
    shipment = new Shipment(1, "Barcelona", "Moscow", new Date(), new Date(), [], 4555)
    
    constructor(private elemRef: ElementRef) {
        jQuery(this.elemRef.nativeElement).dialog({
            autoOpen: false,
            show: {
                effect: "blind",
                duration: 500
            },
            hide: {
                effect: "explode",
                duration: 200
            }
        });
    }
    OnShowDialog(newShipment: Shipment) {
        this.shipment = newShipment;
        jQuery(this.elemRef.nativeElement).dialog("open");
    }
}


