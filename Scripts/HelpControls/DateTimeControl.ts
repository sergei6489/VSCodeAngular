import {Component, ElementRef, ViewChild, Input, Output, EventEmitter, AfterViewInit,forwardRef,OnChanges } from '@angular/core'
import {NG_VALUE_ACCESSOR, NG_VALIDATORS, ControlValueAccessor, FormControl, Validator} from "@angular/forms";
import {Http} from "@angular/http"

@Component({
    selector: 'DateTimePicker',
    template: `<div class="input-group">
                 <input type="text" class="form-control" #dateControl [(ngModel)]='value'/>
                    <div class="input-group-btn hidden-sm-down">
                        <button (click)="clear()" class="btn btn-secondary"><i class="fa fa-times fa-2" aria-hidden="true"></i></button>
                        <button (click)="openDatePicker()" class="btn btn-primary"><span class="fa fa-calendar"></span></button>
                    </div>
               </div>`,
    providers: [
        { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => DateTimeControl), multi: true },
    ]           
})

export class DateTimeControl implements AfterViewInit, ControlValueAccessor, OnChanges {
    value: Date;
    @ViewChild('dateControl') dateControl: ElementRef;
    propagateChange:any = () => {};

    ngAfterViewInit() {
        let picker = jQuery(this.dateControl.nativeElement);
        let self = this;
        picker.datepicker({
            dateFormat: "dd.mm.yy",
            onSelect: function (textDate) {
                self.propagateChange(textDate);
            }
        });
        if (this.value != null)
        picker.datepicker("setDate", this.value.toLocaleDateString());
    }

    openDatePicker() {
        jQuery(this.dateControl.nativeElement).datepicker("show");
    }

    clear() {
        this.value = null;
        this.propagateChange(this.value);
    }

    writeValue(obj: any)
    {
         if (obj)
         {
             this.value = obj;
         }
    }
    registerOnChange(fn: any)
    {
        this.propagateChange = fn;
    }
    registerOnTouched(fn: any)
    {
    }
    ngOnChanges(inputs)
    {
    }
}

