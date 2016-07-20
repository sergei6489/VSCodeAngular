import {IShipmentService} from '../services/IShipmentService';
import {MockShipmentService} from '../services/MockShipmentService';
import express = require('express');
var router = express.Router();
var shipmentService : IShipmentService;
shipmentService= new MockShipmentService();
router.post("/search",(req: express.Request, res: express.Response) =>
{
    var result = shipmentService.GetShipments(req.body);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({result: result}));
});
router.get("/GetDirectionsFrom",(req: express.Request, res: express.Response) =>
{
    var result = shipmentService.GetDirectionsFrom(req.query.data);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({result: result }));
});
router.get("/GetDirectionsTo",(req: express.Request, res: express.Response) =>
{
    var result = shipmentService.GetDirectionsTo(req.query.data);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({result: result }));
});
module.exports= router;