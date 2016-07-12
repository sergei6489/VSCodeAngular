System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Shipment, Direction;
    return {
        setters:[],
        execute: function() {
            Shipment = (function () {
                function Shipment(id, from, to, dateTimeOut, dateTimeInput, places, price) {
                    this.id = id;
                    this.from = from;
                    this.to = to;
                    this.dateTimeOut = dateTimeOut;
                    this.dateTimeInput = dateTimeInput;
                    this.places = places;
                    this.price = price;
                }
                return Shipment;
            }());
            exports_1("Shipment", Shipment);
            Direction = (function () {
                function Direction(from, to) {
                    this.from = from;
                    this.to = to;
                }
                return Direction;
            }());
            exports_1("Direction", Direction);
        }
    }
});

//# sourceMappingURL=ShipmentViewModel.js.map
