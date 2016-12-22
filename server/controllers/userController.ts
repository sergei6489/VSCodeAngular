import express = require('express');
import {UserViewModel} from "../dataModels/UserViewModel";
import {IUserService} from "../services/IUserService";
import kernel = require("../Ioc/inversify.config");
var service = kernel.get<IUserService>("IUserService");
var router = express.Router();
var passport = require('passport');

router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
      var isAuth=false;
      var isAdmin=false;
    if (!err && user && !req.isAuthenticated()) 
    { 
        req.logIn(user, function(err) {
           if (!err) { isAuth = true; }
        });
    }
    return res.json({isAuth : req.isAuthenticated(),isAdmin: isAdmin});
  })(req, res, next);
}); 

router.get('/checkIsAuth', function(req: any, res: express.Response) {
    var isAuth = req.isAuthenticated();
    var isAdmin = false;
    if (isAuth)
    {
        isAdmin = req.user.isAdmin;
    }
    res.json({ isAuth : isAuth,isAdmin: isAuth && isAdmin });
});

//toDo delete user by name
router.get('/deleteUser/:name',function(req: express.Request, res: express.Response){
    service.DeleteUser(req.param(":name"),(error)=>{
            res.json({success: error==null});
    });
});

//toDo get all user
router.get('/getAll',function(req: express.Request, res: express.Response){
    //var users = service.getAllUser();
   // res.send(JSON.stringify(users));
});

router.post('/register',function(req: express.Request, res: express.Response){
    var success =  service.Register(req.body,(error,result)=>{
        res.json({success: error==null});
    });
    
});

router.get('/checkIsLoginExists/:login',function(req: express.Request, res: express.Response)
{
   var login = req.param("login");
   var isExists = service.IsExistsUser(login,(error,result)=>{
        res.json(result!=null);
   });
  
});

router.get('/logoff',function(req:express.Request, res: express.Response)
{
    req.logOut();
    res.json({result:true});
});

export = router