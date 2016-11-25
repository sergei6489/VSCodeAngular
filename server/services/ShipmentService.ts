import 'reflect-metadata';
import {IShipmentService}  from  "./IShipmentService";
import {ShipmentViewModel} from  "../dataModels/ShipmentViewModel";
import {PagerShipmentsViewModel} from "../dataModels/PagerShipmentsViewModel";
import {SearchViewModel} from "../dataModels/SearchViewModel";
import _shipmentSchema = require( "../DB/shipmentSchema" );
import IShipment = require("../DB/IShipment");
import { injectable, inject } from "inversify";

@injectable()
export class ShipmentService implements IShipmentService
{

    GetShipments(search: SearchViewModel,callback: (error: any, result: Array<IShipment>) => void)
    {
        var result : Array<ShipmentViewModel> = new Array<ShipmentViewModel>();
        var data = _shipmentSchema.find({});
            if ( search.from != undefined && search.from!="")
            {
                data.where("from", search.from );
            }
            if (search.to != undefined && search.to!="")
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
            data.exec(callback);
    }

    GetShipment(id: number,callback: (error: any, result: any) => void)
    {
        _shipmentSchema.findById(id,callback);
    }

    GetDirectionsTo(value: string,callback: (error: any, result: any) => void)
    {
        _shipmentSchema.find({'to': {$regex: '/^'+value+'/i'}},callback);
    }

    GetDirectionsFrom(value: string,callback: (error: any, result: any) => void)
    {
        _shipmentSchema.find({'from': {$regex: '/^'+value+'/i'}},callback);
    }
}