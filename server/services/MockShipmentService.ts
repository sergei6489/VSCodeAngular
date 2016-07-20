import {IShipmentService}  from  "./IShipmentService";
import {Shipment} from  "../dataModels/ShipmentViewModel";
import {PagerShipmentsViewModel} from "../dataModels/PagerShipmentsViewModel";
import {SearchViewModel} from "../dataModels/SearchViewModel";

export class MockShipmentService implements IShipmentService
{
    MockShipments: Array<Shipment>;
    constructor()
    {
        var numbers = new Array<number>();
        while (numbers.length<50) {
            numbers.push(numbers.length+1);
        }
         this.MockShipments = new Array<Shipment>();
        this.MockShipments.push(new Shipment(1,"NewYork","Kabul",new Date(),new Date(),numbers,350));
        this.MockShipments.push(new Shipment(2,"NewYork","Chisinau",new Date(),new Date(),numbers,250));
        this.MockShipments.push(new Shipment(3,"San Marino","Muscat",new Date(),new Date(),numbers,1250));
        this.MockShipments.push(new Shipment(4,"Muscat","Bagdad",new Date(),new Date(),numbers,3350));
        this.MockShipments.push(new Shipment(5,"NewYork","Muscat",new Date(),new Date(),numbers,1350));
        this.MockShipments.push(new Shipment(6,"Muscat","Bagdad",new Date(),new Date(),numbers,150));
        this.MockShipments.push(new Shipment(7,"NewYork","Manila",new Date(),new Date(),numbers,350));
        this.MockShipments.push(new Shipment(8,"NewYork","Bagdad",new Date(),new Date(),numbers,353));
        this.MockShipments.push(new Shipment(9,"Manila","Bagdad",new Date(),new Date(),numbers,250));
        this.MockShipments.push(new Shipment(10,"NewYork","Bagdad",new Date(),new Date(),numbers,340));
        this.MockShipments.push(new Shipment(11,"NewYork","Manila",new Date(),new Date(),numbers,450));
        this.MockShipments.push(new Shipment(12,"Manila","San Marino",new Date(),new Date(),numbers,350));
        this.MockShipments.push(new Shipment(13,"NewYork","Bagdad",new Date(),new Date(),numbers,330));
        this.MockShipments.push(new Shipment(14,"NewYork","Manila",new Date(),new Date(),numbers,350));
        this.MockShipments.push(new Shipment(15,"Manila","Bagdad",new Date(),new Date(),numbers,350));
    }
   GetShipments(search: SearchViewModel): Array<Shipment>
   {
     return this.MockShipments;
   }
   GetShipment(id: number): Shipment
   {
        this.MockShipments.forEach(element => {
            if (element.id == id) return element;
        });
        return null;
   }
   GetDirectionsFrom(value: string): Array<string>
   {
        let result: string[];
        result = [];
        value = value.toLowerCase();
        this.MockShipments.forEach(n=>
        {
            if (n.from.toLowerCase().indexOf(value)>-1 && result.indexOf(n.from) == -1)
            {
                result.push(n.from);
            }
        });
        return result;
   }
   GetDirectionsTo(value: string): Array<string>
   {
       let result: string[];
       result = [];
       value = value.toLowerCase();
       this.MockShipments.forEach(n=>
       {
            if (n.to.toLowerCase().indexOf(value)>-1 && result.indexOf( n.to ) == -1)
            {
                result.push(n.to);
            }
        });
        return result;
   }
}