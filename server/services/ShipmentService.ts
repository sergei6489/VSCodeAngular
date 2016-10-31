import {IShipmentService}  from  "./IShipmentService";
import {Shipment} from  "../dataModels/ShipmentViewModel";
import {PagerShipmentsViewModel} from "../dataModels/PagerShipmentsViewModel";
import {SearchViewModel} from "../dataModels/SearchViewModel";
import _shipmentSchema = require( "../DB/shipmentSchema" );

export class ShipmentService implements IShipmentService
{
    GetShipments(search: SearchViewModel): Array<Shipment>
    {
        var result : Array<Shipment> = new Array<Shipment>();
        var data = _shipmentSchema.find({});
        if ( search.from!="")
        {
            data.where("from", search.from );
        }
        if (search.to!="")
        {
            data.where("to",search.to);
        }
        if (search.smallestPrice!=0)
        {
            data.where("price", {$gt : search.smallestPrice});
        }
        if (search.highestPrice != 0)
        {
            data.where("price", {$lt: search.highestPrice});
        }
        if (search.departureDate != null)
        {
            data.where("dateFrom", {$gt : search.departureDate});
        }
        data.exec(function(err, shipments){
            shipments.forEach((shipment)=>{
                result.push( new Shipment(shipment));
            });
        })
        return result;

    }

    GetShipment(id: number): Shipment
    {
        var result;
        _shipmentSchema.findById(id,function(err,shipment){
            result = new Shipment(shipment);
        });
        return result;
    }

    GetDirectionsTo(value: string): Array<string>
    {
        var result : Array<string> = new Array<string>();
        _shipmentSchema.find({'to': '/^'+value+'/','from':{$not: '/^'+value+'/'}},function(err,shipments){
            shipments.forEach((shipment)=>{
                result.push(shipment.to);
            })
        });
        return result;
    }

    GetDirectionsFrom(value: string): Array<string>
    {
        var result : Array<string> = new Array<string>();
        _shipmentSchema.find({'from': '/^'+value+'/','to':{$not: '/^'+value+'/'}},function(err,shipments){
            shipments.forEach((shipment)=>{
                result.push(shipment.from);
            })
        });
        return result;
    }
}