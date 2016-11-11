import {ShipmentViewModel} from  "../dataModels/ShipmentViewModel";
import {PagerShipmentsViewModel} from "../dataModels/PagerShipmentsViewModel";
import {SearchViewModel} from "../dataModels/SearchViewModel";

export interface IShipmentService
{
    GetShipments(search: SearchViewModel,callback: (error: any, result: any) => void);
    GetShipment(id: number,callback: (error: any, result: any) => void);
    GetDirectionsTo(value: string,callback: (error: any, result: any) => void);
    GetDirectionsFrom(value: string, callback: (error: any, result: any) => void);
}