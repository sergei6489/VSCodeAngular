import mongoose = require("mongoose");
import userSchema = require("./userSchema");

interface IShipment extends mongoose.Document
{
    from: string,
    to: string,
    dateTimeOut: any,
    dateTimeInput: any,
    places: Array<number>,
    price: number
}

var _shipmentSchema: mongoose.Schema = new mongoose.Schema({
    from:{
        type: String
    },
    to:{
        type: String
    },
    dateTimeOut:{
        type: Date
    },
    dateTimeInput:{
        type: Date
    },
    price:{
        type: Number
    },
    places:[{
        number:{type:Number},
        user:{type:userSchema}        
    }]
});
 var _shipmentModel = mongoose.model<IShipment>("travels",_shipmentSchema);

 export = _shipmentModel;