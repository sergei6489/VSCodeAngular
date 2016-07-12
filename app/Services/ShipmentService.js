System.register(["@angular/core", "@angular/http", 'rxjs/Observable', 'rxjs/add/operator/map', 'rxjs/add/operator/catch'], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1;
    var ShipmentService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            ShipmentService = (function () {
                function ShipmentService(http) {
                    this.http = http;
                }
                ShipmentService.prototype.getShipments = function (search) {
                    this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    this.options = new http_1.RequestOptions({ headers: this.headers });
                    return this.http.post('http://localhost:4163/shipments/Get', JSON.stringify(search), this.options)
                        .map(this.ExtractData).catch(this.handleError);
                };
                ShipmentService.prototype.getShipmentDetail = function (id) {
                    return this.http.get('?id=' + id).map(function (res) { return res.json(); }, this.headers).map(function (result) {
                        return result;
                    }).subscribe();
                };
                ShipmentService.prototype.saveShipment = function (shipment) {
                    this.http.post('', JSON.stringify(shipment), this.headers).
                        map(function (res) { return res.json(); }).subscribe();
                };
                ShipmentService.prototype.ExtractData = function (res) {
                    if (res.status < 200 || res.status >= 300)
                        throw new Error('Response error:' + res.status);
                    var result = res.json();
                    return result || {};
                };
                ShipmentService.prototype.handleError = function (error) {
                    var errMsg = error.message || 'Server error';
                    console.error(errMsg);
                    return Observable_1.Observable.throw(errMsg);
                };
                ShipmentService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ShipmentService);
                return ShipmentService;
            }());
            exports_1("ShipmentService", ShipmentService);
        }
    }
});

//# sourceMappingURL=ShipmentService.js.map
