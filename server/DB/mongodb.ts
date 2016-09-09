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
            
           this.mongooseInstance = Mongoose.connect(Constants.DBConnectionString);
           return this.mongooseInstance;
        }
}