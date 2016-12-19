import express = require('express');
import {UserViewModel} from "../dataModels/UserViewModel";
import {IUserService} from "../services/IUserService";
import kernel = require("../Ioc/inversify.config");

var service = kernel.get<IUserService>("IUserService");
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy( {
    usernameField: 'name',
    passwordField: 'password'},
  function(username, password, done) {
    service.CheckUser(username,password,(error,_user)=>{   
    if (_user == null)
    {
        return done(null, false, { message: 'Incorrect username.' });
    }
    else if (_user.password!=password)
    {
        return done(null, false, { message: 'Incorrect password.' });
    }
    return done(null,_user);
  });
}));

router.post('/login',
  function(req: express.Request, res: express.Response)
  {
      passport.authenticate('local',function(err, user, info) {
        var isAuth = req.isAuthenticated();
        res.json({ isAuth : isAuth,isAdmin: false }); 
      });

  }
);  

router.get('/checkIsAuth', function(req: express.Request, res: express.Response) {
    var isAuth = req.isAuthenticated();
    res.json({ isAuth : isAuth,isAdmin: false });
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
       console.log(result!=null);
        res.json({success: result!=null});
   });
  
});

export = router;