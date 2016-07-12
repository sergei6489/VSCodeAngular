System.register(['@angular/core', "@angular/http"], function(exports_1, context_1) {
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
    var core_1, http_1;
    var SearchControl;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            SearchControl = (function () {
                function SearchControl(http) {
                    this.http = http;
                    this.valueChange = new core_1.EventEmitter();
                    this.directions = [];
                }
                SearchControl.prototype.getData = function (value) {
                    var _this = this;
                    value = value == undefined ? "" : value;
                    this.http.get(this.url + "?data=" + value).map(function (res) {
                        return res.json();
                    }).map(function (directions) {
                        _this.directions = [];
                        directions.forEach(function (data) { _this.directions.push(data); });
                        if (directions.length != 0 && !jQuery(_this.menuRef.nativeElement).parent().hasClass('open')) {
                            jQuery(_this.menuRef.nativeElement).dropdown('toggle');
                        }
                    }).subscribe();
                };
                SearchControl.prototype.selectItem = function (event) {
                    var target = event.target || event.srcElement || event.currentTarget;
                    this.value = target.innerText;
                    this.valueChange.emit(this.value);
                };
                SearchControl.prototype.Changed = function (value) {
                    this.valueChange.emit(value);
                    this.getData(value);
                };
                SearchControl.prototype.click = function () {
                    this.getData(this.value);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], SearchControl.prototype, "text", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], SearchControl.prototype, "value", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], SearchControl.prototype, "url", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], SearchControl.prototype, "valueChange", void 0);
                __decorate([
                    core_1.ViewChild('menuRef'), 
                    __metadata('design:type', core_1.ElementRef)
                ], SearchControl.prototype, "menuRef", void 0);
                SearchControl = __decorate([
                    core_1.Component({
                        selector: 'comboBoxTemplate',
                        template: "<label class=\"label-Margin\">{{text}}:</label>\n                    <div class=\"input-group\">\n                        <input [(ngModel)]=\"value\" class=\"form-control\" (input)=\"Changed($event.target.value)\"/>\n                        <div class=\"input-group-btn\">\n                            <button type=\"button\" (click)=\"click()\"  class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\"><span class=\"caret\"></span></button>\n                            <ul #menuRef class=\"dropdown-menu dropdown-menu-right\" role=\"menu\">\n                                <li *ngFor=\"#direction of directions\" class=\"input-lg\"><a href=\"javascript:void(0)\" (click)=\"selectItem($event)\" >{{direction}}</a></li>\n                            </ul>\n                        </div>\n                    </div>"
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], SearchControl);
                return SearchControl;
            }());
            exports_1("SearchControl", SearchControl);
        }
    }
});

//# sourceMappingURL=SearchControl.js.map
