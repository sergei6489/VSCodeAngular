import express = require('express');
import {UserViewModel} from "../dataModels/UserViewModel";
import {UserService} from "../services/UserService";

var service = new UserService();
var router = express.Router();
var passport = require('passport');  
// auth
router.get('/login/:login/:password',function (req: express.Request, res: express.Response) {
    res.setHeader('Content-Type', 'application/json');
    var isExists = service.IsExistsUser(req.param(":login"),req.param(":passport"));
    res.send(JSON.stringify({ isExists : isExists }));
});

router.get('/checkIsAuth', function(req: express.Request, res: express.Response) {
    res.setHeader('Content-Type', 'application/json');
    var isAuth = req.isAuthenticated();
    res.send(JSON.stringify({ isAuth : isAuth,isAdmin: false }));
});
//toDo delete user by name
router.get('/deleteUser/:name',function(req: express.Request, res: express.Response){
    res.setHeader('Content-Type','application/json');
    var isDeleted = service.DeleteUser(req.param(":name"));
    res.send(JSON.stringify({success: isDeleted}));
});

//toDo get all user
router.get('/getAll',function(req: express.Request, res: express.Response){
    res.setHeader('Content-Type','application/json');
    var users = service.getAllUser();
    res.send(JSON.stringify(users));
});

router.post('/register',function(req: express.Request, res: express.Response){
    var success =  service.Register(req.body);
    
});

router.get('/checkIsLoginExists/:login',function(req: express.Request, res: express.Response)
{
   res.setHeader('Content-Type','application/json');
   res.send(JSON.stringify(true));
});

module.exports = router;