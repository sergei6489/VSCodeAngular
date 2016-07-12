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
    var ShipmentDetailComponent;
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
            ShipmentDetailComponent = (function () {
                function ShipmentDetailComponent(elemRef) {
                    this.elemRef = elemRef;
                    this.shipment = new ShipmentViewModel_1.Shipment(1, "Barcelona", "Moscow", new Date(), new Date(), [], 4555);
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
                ShipmentDetailComponent.prototype.OnShowDialog = function (newShipment) {
                    this.shipment = newShipment;
                    jQuery(this.elemRef.nativeElement).dialog("open");
                };
                ShipmentDetailComponent = __decorate([
                    core_1.Component({
                        selector: "shipment-detail",
                        templateUrl: "app/partials/shipment-details.html",
                        styles: ["\n        .sidebar{\n            position:fixed;\n            bottom:0;\n            top:50px;\n            background-color:aliceblue;\n        }\n"]
                    }), 
                    __metadata('design:paramtypes', [core_2.ElementRef])
                ], ShipmentDetailComponent);
                return ShipmentDetailComponent;
            }());
            exports_1("ShipmentDetailComponent", ShipmentDetailComponent);
        }
    }
});

//# sourceMappingURL=ShipmentDetailComponent.js.map
