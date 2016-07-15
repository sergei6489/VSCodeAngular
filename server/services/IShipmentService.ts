import {Shipment} from  "../dataModels/ShipmentViewModel";
import {PagerShipmentsViewModel} from "../dataModels/PagerShipmentsViewModel";
import {SearchViewModel} from "../dataModels/SearchViewModel";

export interface IShipmentService
{
    GetShipments(search: SearchViewModel): Array<Shipment>;
    GetShipment(id: number): Shipment;
    GetDirectionsTo(value: string): Array<string>;
    GetDirectionsFrom(value: string): Array<string>
}