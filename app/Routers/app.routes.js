System.register(['@angular/router', './shipments.routes', './user.routes'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, shipments_routes_1, user_routes_1;
    var routes, APP_ROUTER_PROVIDERS;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (shipments_routes_1_1) {
                shipments_routes_1 = shipments_routes_1_1;
            },
            function (user_routes_1_1) {
                user_routes_1 = user_routes_1_1;
            }],
        execute: function() {
            exports_1("routes", routes = shipments_routes_1.ShipmentsRouters.concat(user_routes_1.UserRoutes));
            exports_1("APP_ROUTER_PROVIDERS", APP_ROUTER_PROVIDERS = [router_1.provideRouter(routes)]);
        }
    }
});

//# sourceMappingURL=app.routes.js.map
