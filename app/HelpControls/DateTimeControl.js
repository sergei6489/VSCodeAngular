System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var DateTimeControl;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            DateTimeControl = (function () {
                function DateTimeControl() {
                    this.valueChange = new core_1.EventEmitter();
                }
                DateTimeControl.prototype.ngAfterViewInit = function () {
                    var picker = jQuery(this.dateControl.nativeElement);
                    var self = this;
                    picker.datepicker({
                        dateFormat: "dd.mm.yy",
                        onSelect: function (textDate) {
                            self.changed(this.value);
                        }
                    });
                    if (this.value != null)
                        picker.datepicker("setDate", this.value.toLocaleDateString());
                };
                DateTimeControl.prototype.openDatePicker = function () {
                    jQuery(this.dateControl.nativeElement).datepicker("show");
                };
                DateTimeControl.prototype.changed = function (value) {
                    this.value = new Date(value);
                    this.valueChange.emit(value);
                };
                DateTimeControl.prototype.clear = function () {
                    this.changed(null);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Date)
                ], DateTimeControl.prototype, "value", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], DateTimeControl.prototype, "valueChange", void 0);
                __decorate([
                    core_1.ViewChild('dateControl'), 
                    __metadata('design:type', core_1.ElementRef)
                ], DateTimeControl.prototype, "dateControl", void 0);
                DateTimeControl = __decorate([
                    core_1.Component({
                        selector: 'DateTimePicker',
                        template: "<div class=\"input-group\">\n                 <input type=\"text\" class=\"form-control\" #dateControl [(ngModel)]='value'/>\n                <div class=\"input-group-btn\">\n                    <button (click)=\"clear()\" class=\"btn btn-default\"><span class=\"glyphicon glyphicon-remove\"></span></button>\n                    <button (click)=\"openDatePicker()\" class=\"btn btn-default\"><span class=\"glyphicon glyphicon-calendar\"></span></button>\n                </div>\n               </div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], DateTimeControl);
                return DateTimeControl;
            }());
            exports_1("DateTimeControl", DateTimeControl);
        }
    }
});

//# sourceMappingURL=DateTimeControl.js.map
