import DBAccess = require("./mongodb");
import IShipment = require("./IShipment");

var mongoose = DBAccess.mongooseInstance;
var mongooseConnection = DBAccess.mongooseConnection;

var _shipmentSchema = new mongoose.Schema({
    from:{
        type: String
    },
    to:{
        type: String
    },
    dateTo:{
        type: Date
    },
    dateFrom:{
        type: Date
    },
    price:{
        type: Number 
    },
    places:[{
        number:
        {
            type:Number
        }  
    }]
});
var _shipmentModel = mongooseConnection.model<IShipment>("travels",_shipmentSchema);

export = _shipmentModel;
