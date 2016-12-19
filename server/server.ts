import express = require('express');
import path = require('path');
var db = require('./DB/mongodb');
import mongoose = require("mongoose");
var flash = require('connect-flash');

var cookieParser = require('cookie-parser');  
var userController = require('./controllers/userController');
var shipmentsController = require('./controllers/shipmentsController');
var port: number = process.env.PORT || 3000;
var app = express();
var bodyParser = require('body-parser')
var passport = require('passport');
var session = require('express-session');
db.open();
app.use(cookieParser());  
app.use(express.static(path.join(__dirname, 'public')));
app.use(flash());
app.use(session({ secret: 'shhsecret' }));  
app.use(passport.initialize());  
app.use(passport.session());  


app.use( bodyParser.json() );       
app.use(bodyParser.urlencoded({    
  extended: true
})); 
// public folders css,js libs
app.use('/css', express.static(path.resolve(__dirname, 'client/css')));
app.use('/node_modules', express.static(path.resolve(__dirname, '../node_modules')));
app.use('/client', express.static(path.resolve(__dirname, 'client')));
// node js router
app.use('/user', userController);
app.use('/shipments', shipmentsController);
var renderIndex = (req: express.Request, res: express.Response) => {
    res.sendFile(path.resolve(__dirname, 'client/index.html'));
}

app.get('/*', renderIndex);

var server = app.listen(port, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('This express app is listening on port:' + port);
});

mongoose.set('error', function (collectionName, method, query, doc) {
    console.info(query);
})



