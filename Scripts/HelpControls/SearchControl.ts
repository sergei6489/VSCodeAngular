import {Component, ElementRef, ViewChild, Input, Output, EventEmitter, OnChanges,forwardRef } from '@angular/core'
import {Http} from "@angular/http";
import {ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, FormControl} from "@angular/forms";

@Component({
    selector: 'comboBoxTemplate',
    template:`<label class="col-md-2">{{text}}:</label>
                    <div class="col-md-4"> 
                    <div class="input-group">
                        <input [(ngModel)]="value" class="form-control" (input)="Changed($event.target.value)"/>
                        <div class="input-group-btn ">
                            <button type="button" (click)="click()"  class="btn btn-default dropdown-toggle" data-toggle="dropdown"><span class="caret"></span></button>
                            <ul #menuRef class="dropdown-menu dropdown-menu-right" role="menu">
                                <li *ngFor="#direction of directions" class="dropdown-item"><a href="javascript:void(0)" (click)="selectItem($event)" >{{direction}}</a></li>
                            </ul>
                        </div>
                    </div>
                    </div>`,
    providers:[
        { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(()=>SearchControl), multi:true }
    ]
})
export class SearchControl implements ControlValueAccessor, OnChanges {
    @Input() text: string;
    value: string;
    @Input() url: string;
    public directions: Array<string> = [];
    @ViewChild('menuRef') menuRef: ElementRef;


    propagateChange:any = () =>{};
    public constructor(public http: Http) {
    }

    getData(value) {
        value = value == undefined ? "" : value;
        this.http.get(this.url+"?data=" + value).map(res =>
            res.json()).map((data: any) => {
            this.directions = [];
            data.result.forEach((data: string) => { this.directions.push(data) });
            if (data.result.length != 0 && !jQuery(this.menuRef.nativeElement).parent().hasClass('open')) {
                jQuery(this.menuRef.nativeElement).dropdown('toggle');
            }
            }).subscribe();
    }

    selectItem(event) {
        var target = event.target || event.srcElement || event.currentTarget;
        this.value = target.innerText;
        this.propagateChange(this.value);
    }

    Changed(value) {
        this.propagateChange(value);
        this.getData(value);
    }

    click() {
        this.getData(this.value);
    }

    writeValue(obj: any)
    {
        if (obj !== this.value)
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