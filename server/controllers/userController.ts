import express = require('express');
var router = express.Router();
// auth
router.get('/login/:login/:password',function (req,res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ a: req.param(":login") }));
});
module.exports = router;