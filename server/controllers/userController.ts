import express = require('express');
var router = express.Router();
var passport = require('passport');  
// auth
router.get('/login/:login/:password',function (req,res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ a: req.param(":login") }));
});

router.get('/checkIsAuth', function(req,res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ isAuth : req.isAuthenticated(),isAdmin: false }));
});

module.exports = router;