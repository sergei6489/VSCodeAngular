import {IShipmentService} from '../services/IShipmentService';
import {ShipmentViewModel} from '../dataModels/ShipmentViewModel';
import kernel = require("../Ioc/inversify.config");
import express = require('express');
import IShipment = require("../DB/IShipment");
var router = express.Router();
var shipmentService : IShipmentService;

shipmentService= kernel.get<IShipmentService>('IShipmentService');
router.post("/search",(req: express.Request, res: express.Response) =>
{
    var array = new Array<ShipmentViewModel>();
    shipmentService.GetShipments(req.body, (error:any, result: Array<IShipment>)=>{
        result.forEach(n=>{array.push( new ShipmentViewModel(n) )});
        res.json({result: array});
    });
});
router.get("/GetDirectionsFrom",(req: express.Request, res: express.Response) =>
{
    shipmentService.GetDirectionsFrom(req.query.data,(error: any, result: any)=>{
        res.json({result: result });
    });
});
router.get("/GetDirectionsTo",(req: express.Request, res: express.Response) =>
{
    shipmentService.GetDirectionsTo(req.query.data,(error: any, result: any)=>{
        res.json({result: result });
    });
});
router.get("/GetDetails/:id",(req: express.Request, res: express.Response) =>
{
    res.setHeader('Content-Header','application/json');
    
    var data = shipmentService.GetShipment(req.params[":id"],(error:any,result:any)=>{
        res.json({result: result });
    });
});
export = router;