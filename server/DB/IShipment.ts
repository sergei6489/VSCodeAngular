import mongoose = require("mongoose");

interface IShipment extends mongoose.Document
{
    from: string,
    to: string,
    dateTo: any,
    dateFrom: any,
    places: Array<number>,
    price: number
}
export = IShipment;