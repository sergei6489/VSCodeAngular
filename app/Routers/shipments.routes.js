System.register(["../Components/ShipmentsComponent", "../Components/TicketComponent"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ShipmentsComponent_1, TicketComponent_1;
    var ShipmentsRouters;
    return {
        setters:[
            function (ShipmentsComponent_1_1) {
                ShipmentsComponent_1 = ShipmentsComponent_1_1;
            },
            function (TicketComponent_1_1) {
                TicketComponent_1 = TicketComponent_1_1;
            }],
        execute: function() {
            exports_1("ShipmentsRouters", ShipmentsRouters = [
                { path: '', component: ShipmentsComponent_1.ShipmentsComponent },
                { path: 'ticketBuy:id', component: TicketComponent_1.TicketComponent }
            ]);
        }
    }
});

//# sourceMappingURL=shipments.routes.js.map
