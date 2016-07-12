﻿///<reference path="../typings/tsd.d.ts" />
import {Component, ElementRef, ViewChild, Input, Output, EventEmitter } from '@angular/core'
import {Http} from "@angular/http"
@Component({
    selector: 'comboBoxTemplate',
    template:`<label class="label-Margin">{{text}}:</label>
                    <div class="input-group">
                        <input [(ngModel)]="value" class="form-control" (input)="Changed($event.target.value)"/>
                        <div class="input-group-btn">
                            <button type="button" (click)="click()"  class="btn btn-default dropdown-toggle" data-toggle="dropdown"><span class="caret"></span></button>
                            <ul #menuRef class="dropdown-menu dropdown-menu-right" role="menu">
                                <li *ngFor="#direction of directions" class="input-lg"><a href="javascript:void(0)" (click)="selectItem($event)" >{{direction}}</a></li>
                            </ul>
                        </div>
                    </div>`
})
export class SearchControl {
    @Input() text: string;
    @Input() value: string;
    @Input() url: string;
    @Output() valueChange: EventEmitter<String> = new EventEmitter<String>();
    public directions: Array<string> = [];
    @ViewChild('menuRef') menuRef: ElementRef;

    public constructor(public http: Http) {
    }

    getData(value) {
        value = value == undefined ? "" : value;
        this.http.get(this.url+"?data=" + value).map(res =>
            res.json()).map((directions: Array<string>) => {
            this.directions = [];
            directions.forEach((data: string) => { this.directions.push(data) });
            if (directions.length != 0 && !jQuery(this.menuRef.nativeElement).parent().hasClass('open')) {
                jQuery(this.menuRef.nativeElement).dropdown('toggle');
            }
            }).subscribe();
    }

    selectItem(event) {
        var target = event.target || event.srcElement || event.currentTarget;
        this.value = target.innerText;
        this.valueChange.emit(this.value);
    }

    Changed(value) {
        this.valueChange.emit(value);
        this.getData(value);
    }

    click() {
        this.getData(this.value);
    }
}