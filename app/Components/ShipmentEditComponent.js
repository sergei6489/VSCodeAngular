System.register(['@angular/core', '../ViewModels/ShipmentViewModel'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, ShipmentViewModel_1, core_2;
    var ShipmentEditComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (ShipmentViewModel_1_1) {
                ShipmentViewModel_1 = ShipmentViewModel_1_1;
            }],
        execute: function() {
            ShipmentEditComponent = (function () {
                function ShipmentEditComponent(elemRef) {
                    this.elemRef = elemRef;
                    this.shipment = new ShipmentViewModel_1.Shipment(1, "Barcelona", "Moscow", new Date(), new Date(), [], 4555);
                    this.directions = [];
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
                ShipmentEditComponent.prototype.getData = function () {
                };
                ShipmentEditComponent.prototype.OnShowDialog = function (shipment) {
                    this.getData();
                    this.shipment = new ShipmentViewModel_1.Shipment(shipment.id, shipment.from, shipment.to, shipment.dateTimeOut, shipment.dateTimeInput, shipment.places, shipment.price);
                    jQuery(this.elemRef.nativeElement).dialog("open");
                };
                ShipmentEditComponent = __decorate([
                    core_1.Component({
                        selector: "shipment-edit",
                        templateUrl: "app/partials/shipment-edit.html"
                    }), 
                    __metadata('design:paramtypes', [core_2.ElementRef])
                ], ShipmentEditComponent);
                return ShipmentEditComponent;
            }());
            exports_1("ShipmentEditComponent", ShipmentEditComponent);
        }
    }
});

//# sourceMappingURL=ShipmentEditComponent.js.map
