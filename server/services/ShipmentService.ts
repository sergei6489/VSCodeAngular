import {IShipmentService}  from  "./IShipmentService";
import {Shipment} from  "../dataModels/ShipmentViewModel";
import {PagerShipmentsViewModel} from "../dataModels/PagerShipmentsViewModel";
import {SearchViewModel} from "../dataModels/SearchViewModel";
import _shipmentSchema = require( "../DB/shipmentSchema" );


export class ShipmentService implements IShipmentService
{
    constructor()
    {

    }
    GetShipments(search: SearchViewModel): Array<Shipment>
    {
        var data = _shipmentSchema.find({});
        if ( search.from!="")
        {
            data = data.where("from", search.from );
        }
        if (search.to!="")
        {
            data = data.where("to",search.to);
        }
        if (search.smallestPrice!=0)
        {
            data = data.where("price", {$gt : search.smallestPrice});
        }
        if (search.highestPrice != 0)
        {
            data = data.where("price", {$lt: search.highestPrice});
        }
        if (search.departureDate != null)
        {
            data = data.where("dateFrom", {$gt : search.departureDate});
        }


    }
    GetShipment(id: number): Shipment
    {

    }
    GetDirectionsTo(value: string): Array<string>
    {

    }
    GetDirectionsFrom(value: string): Array<string>
    {

    }
}