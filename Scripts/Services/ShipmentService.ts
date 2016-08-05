///<reference path="../typings/tsd.d.ts" />
import { Injectable } from "@angular/core"
import {Http, Headers, Response, RequestOptions} from "@angular/http"
import {Shipment} from "../ViewModels/ShipmentViewModel"
import {SearchViewModel} from "../ViewModels/SearchViewModel"
import {PagerShipmentsViewModel} from "../ViewModels/PagerShipmentsViewModel"
import { Observable }  from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {BaseService} from "./BaseService";

@Injectable()
export class ShipmentService extends BaseService
{
    public constructor(http: Http)
    {
        super(http);
    }

    getShipments( search: SearchViewModel ) {
        return this.http.post('/shipments/search', JSON.stringify(search), this.options)
            .map(this.ExtractData).catch(this.handleError);
    }

    getShipmentDetail(id: number) {
        return this.http.get('?id=' + id).map(res => res.json(), this.headers).map((result: Shipment) =>
        {
            return result;
        }).subscribe();
    }

    saveShipment(shipment: Shipment) {
        this.http.post('', JSON.stringify(shipment), this.headers).
            map(res => res.json()).subscribe();
    }

    
}