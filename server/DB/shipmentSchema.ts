import mongoose = require("mongoose");
import IShipment = require("./IShipment");

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
        number:
        {
            type:Number
        },
        user:
        {
            name: String,
            surname: String,
            patronymic: String,
            bithday: Date,
            isMale: Boolean
        }  
    }]
});
 var _shipmentModel = mongoose.model<IShipment>("travels",_shipmentSchema,'travels');

 export = _shipmentModel;