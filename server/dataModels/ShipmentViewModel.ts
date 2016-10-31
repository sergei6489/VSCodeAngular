import IShipment = require('../DB/IShipment');

export class Shipment {

    private _shipmentModel: IShipment;

    constructor(heroModel: IShipment) {
        this._shipmentModel = heroModel;
    }

        get id(): string{
            return this._shipmentModel.id;
        }
        get from(): string{
            return this._shipmentModel.from;
        }
        get to(): string{
            return this._shipmentModel.to;
        }
        get dateTimeOut(): any{
            return this._shipmentModel.dateTimeOut;
        }
        get dateTimeInput(): any{
            return this._shipmentModel.dateTimeInput;
        }
        get places(): Array<number>{
            return this._shipmentModel.places;
        }
        get price(): number{
            return this._shipmentModel.price;
        }
}

export class Direction {
    constructor(
        public from: string,
        public to: string
    )
    { }
}