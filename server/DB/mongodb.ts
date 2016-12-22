import Mongoose = require("mongoose");
import Constants = require( "../constants");

class DBAccess {
    static mongooseInstance:any;
    static mongooseConnection: Mongoose.Connection;
    constructor() {
        open();
    }
    static open()
        {
            if (this.mongooseInstance) return this.mongooseInstance;
             this.mongooseConnection  = Mongoose.connection;
            this.mongooseConnection.once("open", () => {
                console.log("Connection to mongodb.");
            });
        Mongoose.Promise = global.Promise;
           this.mongooseInstance = Mongoose.connect(Constants.DBConnectionString, {server: { auto_reconnect: true }});
           
           this.mongooseInstance.connection.on('disconnected', function(){
                console.log('Lost MongoDB connection...');
            });
            this.mongooseInstance.connection.on('connected', function() {
                console.log('Connection established to MongoDB');
            });

            this.mongooseInstance.connection.on('reconnected', function() {
                console.log('Reconnected to MongoDB');
                
            });
            return this.mongooseInstance;
        }
}

DBAccess.open();
export = DBAccess;