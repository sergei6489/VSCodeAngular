System.register(['@angular/platform-browser-dynamic', '@angular/http', './appMain', './Routers/app.routes', '@angular/common', '@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, http_1, appMain_1, app_routes_1, common_1, core_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (appMain_1_1) {
                appMain_1 = appMain_1_1;
            },
            function (app_routes_1_1) {
                app_routes_1 = app_routes_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.bootstrap(appMain_1.appMain, [http_1.HTTP_PROVIDERS, app_routes_1.APP_ROUTER_PROVIDERS, core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy })]);
        }
    }
});

//# sourceMappingURL=main.js.map
