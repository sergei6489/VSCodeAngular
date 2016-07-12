﻿///<reference path="../typings/tsd.d.ts" />
import {Component, Input} from '@angular/core';
import { Shipment } from '../ViewModels/ShipmentViewModel';
import {ElementRef} from '@angular/core';

@Component({
    selector: "shipment-edit",
    templateUrl: "app/partials/shipment-edit.html"
})
export class ShipmentEditComponent {
    shipment = new Shipment(1, "Barcelona", "Moscow", new Date(), new Date(), [], 4555);
    directions: Array<string> = [];

    constructor(private elemRef: ElementRef) {
        jQuery(this.elemRef.nativeElement).dialog({
            height: 400,
            width: 450,
            modal: true,
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

    getData() {
    }

    OnShowDialog(shipment: Shipment) {
        this.getData();
        this.shipment = new Shipment(shipment.id, shipment.from, shipment.to,shipment.dateTimeOut, shipment.dateTimeInput, shipment.places, shipment.price);
        jQuery(this.elemRef.nativeElement).dialog("open");
    }
}