import mongoose = require("mongoose");

interface IShipment extends mongoose.Document
{
    from: string,
    to: string,
    dateTimeOut: any,
    dateTimeInput: any,
    places: Array<number>,
    price: number
}
export = IShipment;