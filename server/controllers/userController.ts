import express = require('express');
import {UserViewModel} from "../dataModels/UserViewModel";
import {IUserService} from "../services/IUserService";
import kernel = require("../Ioc/inversify.config");

var service = kernel.get<IUserService>("IUserService");
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {
    var _user = service.GetUserByLogin(username);
    if (_user == null)
    {
        return done(null, false, { message: 'Incorrect username.' });
    }
    else if (_user.password!=password)
    {
        return done(null, false, { message: 'Incorrect password.' });
    }
    return done(null, _user);
  }
));

router.post('/login',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login',
                                   failureFlash: true })
);  

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