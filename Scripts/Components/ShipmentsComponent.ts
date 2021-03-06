﻿import {Component, ViewChild, OnInit} from '@angular/core';
import { Shipment, Direction } from '../ViewModels/ShipmentViewModel';
import {ShipmentDetailComponent} from '../Components/shipmentDetailComponent';
import { ShipmentEditComponent } from '../Components/shipmentEditComponent';
import {SearchControl} from '../HelpControls/SearchControl';
import { ShipmentService } from "../Services/ShipmentService";
import { BaseService } from "../Services/BaseService";
import { SearchViewModel } from "../ViewModels/SearchViewModel";
import { PagerShipmentsViewModel } from "../ViewModels/PagerShipmentsViewModel";
import { DateTimeControl } from "../HelpControls/DateTimeControl";
import {FormGroup,FormControl,FormBuilder,Validators} from "@angular/forms";
import {ValidationService} from "../Services/ValidationService";
import {UserService} from "../Services/UserService";

@Component({
    selector: "testProject",
    templateUrl: "client/views/Main.html"
})

export class ShipmentsComponent implements OnInit {
    //@ViewChild("shipmentDetail") detail: ShipmentDetailComponent;
   // @ViewChild("shipmentEdit") edit: ShipmentEditComponent;
    shipments: Array<Shipment> = [];
    errorText: string;
    isLoad: boolean;
    myGroup: FormGroup;
    ngOnInit() {
        this.init();
    }

    constructor(public service: ShipmentService, public test: UserService, public search: SearchViewModel,fb: FormBuilder) {
        var self = this;
        this.myGroup = fb.group({
            "smallestPricefc": new FormControl('',(control)=>{ 
                return ValidationService.minNumberValueValidator(control,self.search.highestPrice,100);
            }),
            "highestPricefc": new FormControl('',(control)=>{ return ValidationService.maxNumberValueValidator(control,10000,search.smallestPrice);}),
            "fromfc": new FormControl(''),
            "tofc": new FormControl(''),
            "departureDatefc": new FormControl(''),
            "returnDatefc": new FormControl('')
        });
    }

    init() {
        this.shipments = [];
        this.search = new SearchViewModel();
        this.search.pageIndex = 1;
        this.search.pageCount = 0;
        this.search.highestPrice = 1000;
        this.search.smallestPrice = 10;
        this.search.itemCount = 8;
        this.search.departureDate = null;
        this.search.returnDate = null;
        this.Search();
    }

    Search() {
        if (this.myGroup.valid)
        {
            this.shipments = [];
            this.isLoad = true;
            this.service.getShipments(this.search).
                    subscribe(res => {
                        res.result.forEach((data: Shipment) => {
                            this.shipments.push(new Shipment(data.id, data.from, data.to, new Date(data.dateTimeOut), new Date(data.dateTimeInput), data.places, data.price));
                        });
                        this.search.pageCount = res.PageCount;
                        this.isLoad = false;
                    }, error => { this.errorText = error; this.isLoad = false; });
        }
        else{
            this.myGroup.controls["smallestPricefc"].markAsDirty();
            this.myGroup.controls["highestPricefc"].markAsDirty();
        }
    }

    previewPage() {
        if (this.search.pageIndex > 0 && this.search.pageIndex < this.search.pageCount - 1) {
            this.search.pageIndex--;
            this.Search();
        }
    }

    nextPage() {
        if (this.search.pageIndex < this.search.pageCount) {
            this.search.pageIndex++;
            this.Search();
        }
    }

    // показать детальную информацию по маршруту
    ShowInfo(shipment: Shipment) {
       // this.detail.OnShowDialog(shipment);
    }

    EditInfo(shipment: Shipment) {
       // this.edit.OnShowDialog(shipment);
    }
}