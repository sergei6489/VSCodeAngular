System.register(["@angular/router", '@angular/core', '../ViewModels/ShipmentViewModel', '../Components/shipmentDetailComponent', '../Components/shipmentEditComponent', '../HelpControls/SearchControl', "../Services/ShipmentService", "../ViewModels/SearchViewModel", "../HelpControls/DateTimeControl", "@angular2-material/button", "@angular2-material/progress-circle", "@angular2-material/checkbox", "@angular2-material/card"], function(exports_1, context_1) {
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
    var router_1, core_1, ShipmentViewModel_1, shipmentDetailComponent_1, shipmentEditComponent_1, SearchControl_1, ShipmentService_1, SearchViewModel_1, DateTimeControl_1, button_1, progress_circle_1, checkbox_1, card_1;
    var ShipmentsComponent;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ShipmentViewModel_1_1) {
                ShipmentViewModel_1 = ShipmentViewModel_1_1;
            },
            function (shipmentDetailComponent_1_1) {
                shipmentDetailComponent_1 = shipmentDetailComponent_1_1;
            },
            function (shipmentEditComponent_1_1) {
                shipmentEditComponent_1 = shipmentEditComponent_1_1;
            },
            function (SearchControl_1_1) {
                SearchControl_1 = SearchControl_1_1;
            },
            function (ShipmentService_1_1) {
                ShipmentService_1 = ShipmentService_1_1;
            },
            function (SearchViewModel_1_1) {
                SearchViewModel_1 = SearchViewModel_1_1;
            },
            function (DateTimeControl_1_1) {
                DateTimeControl_1 = DateTimeControl_1_1;
            },
            function (button_1_1) {
                button_1 = button_1_1;
            },
            function (progress_circle_1_1) {
                progress_circle_1 = progress_circle_1_1;
            },
            function (checkbox_1_1) {
                checkbox_1 = checkbox_1_1;
            },
            function (card_1_1) {
                card_1 = card_1_1;
            }],
        execute: function() {
            ShipmentsComponent = (function () {
                function ShipmentsComponent(service, search) {
                    this.service = service;
                    this.search = search;
                    this.shipments = [];
                }
                ShipmentsComponent.prototype.ngOnInit = function () {
                    this.init();
                };
                ShipmentsComponent.prototype.init = function () {
                    this.shipments = [];
                    this.search = new SearchViewModel_1.SearchViewModel();
                    this.search.pageIndex = 1;
                    this.search.pageCount = 0;
                    this.search.highestPrice = 1000;
                    this.search.smallestPrice = 10;
                    this.search.itemCount = 8;
                    this.search.departureDate = null;
                    this.search.returnDate = null;
                    this.Search();
                };
                ShipmentsComponent.prototype.Search = function () {
                    this.shipments = [];
                    this.isLoad = true;
                    var self = this;
                    setTimeout(function () {
                        self.service.getShipments(self.search).
                            subscribe(function (res) {
                            res.Result.forEach(function (data) {
                                self.shipments.push(new ShipmentViewModel_1.Shipment(data.id, data.from, data.to, new Date(data.dateTimeOut), new Date(data.dateTimeInput), data.places, data.price));
                            });
                            self.search.pageCount = res.PageCount;
                            self.isLoad = false;
                        }, function (error) { self.errorText = error; self.isLoad = false; });
                    }, 2000);
                };
                ShipmentsComponent.prototype.previewPage = function () {
                    if (this.search.pageIndex > 0 && this.search.pageIndex < this.search.pageCount - 1) {
                        this.search.pageIndex--;
                        this.Search();
                    }
                };
                ShipmentsComponent.prototype.nextPage = function () {
                    if (this.search.pageIndex < this.search.pageCount) {
                        this.search.pageIndex++;
                        this.Search();
                    }
                };
                // показать детальную информацию по маршруту
                ShipmentsComponent.prototype.ShowInfo = function (shipment) {
                    this.detail.OnShowDialog(shipment);
                };
                ShipmentsComponent.prototype.EditInfo = function (shipment) {
                    this.edit.OnShowDialog(shipment);
                };
                __decorate([
                    core_1.ViewChild("shipmentDetail"), 
                    __metadata('design:type', shipmentDetailComponent_1.ShipmentDetailComponent)
                ], ShipmentsComponent.prototype, "detail", void 0);
                __decorate([
                    core_1.ViewChild("shipmentEdit"), 
                    __metadata('design:type', shipmentEditComponent_1.ShipmentEditComponent)
                ], ShipmentsComponent.prototype, "edit", void 0);
                ShipmentsComponent = __decorate([
                    core_1.Component({
                        selector: "testProject",
                        providers: [ShipmentService_1.ShipmentService, SearchViewModel_1.SearchViewModel],
                        templateUrl: "app/partials/Main.html",
                        directives: [card_1.MD_CARD_DIRECTIVES, button_1.MdButton, checkbox_1.MD_CHECKBOX_DIRECTIVES, progress_circle_1.MD_PROGRESS_CIRCLE_DIRECTIVES, shipmentDetailComponent_1.ShipmentDetailComponent, shipmentEditComponent_1.ShipmentEditComponent, SearchControl_1.SearchControl, DateTimeControl_1.DateTimeControl, router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [ShipmentService_1.ShipmentService, SearchViewModel_1.SearchViewModel])
                ], ShipmentsComponent);
                return ShipmentsComponent;
            }());
            exports_1("ShipmentsComponent", ShipmentsComponent);
        }
    }
});

//# sourceMappingURL=ShipmentsComponent.js.map
