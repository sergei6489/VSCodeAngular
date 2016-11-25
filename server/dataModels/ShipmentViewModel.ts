import IShipment = require('../DB/IShipment');

export class ShipmentViewModel {

    private _shipmentModel: IShipment;

    constructor(heroModel: IShipment) {
        this._shipmentModel = heroModel;
    }

      public  get id(): string{
            return this._shipmentModel.id;
        }
      public get from(): string{
            return this._shipmentModel.from;
        }
      public  get to(): string{
            return this._shipmentModel.to;
        }
      public  get dateTimeOut(): any{
            return this._shipmentModel.dateFrom;
        }
      public  get dateTimeInput(): any{
            return this._shipmentModel.dateTo;
        }
      public  get places(): Array<number>{
            return this._shipmentModel.places;
        }
      public  get price(): number{
            return this._shipmentModel.price;
        }
       public  toJSON() {
            return { id: this.id,
                    from: this.from,
                    to: this.to,
                    dateTimeOut: this.dateTimeOut,
                    dateTimeInput: this.dateTimeInput,
                    places: this.places,
                    price:this.price,
                 };
        }
}

export class Direction {
    constructor(
        public from: string,
        public to: string
    )
    { }
}