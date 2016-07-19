import express = require('express');
import path = require('path');
var port: number = process.env.PORT || 3000;
var app = express();

app.use('/css', express.static(path.resolve(__dirname, 'css')));
app.use('/node_modules', express.static(path.resolve(__dirname, 'node_modules')));
app.use('/client', express.static(path.resolve(__dirname, 'client')));
var renderIndex = (req: express.Request, res: express.Response) => {
    res.sendFile(path.resolve(__dirname, 'client/index.html'));
}

app.get('/index.html', renderIndex);

var server = app.listen(port, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('This express app is listening on port:' + port);
});
