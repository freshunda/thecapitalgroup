var express = require('express');
var procedure = require('../procedures/apply.proc');
var eSvc = require('../services/email.svc');

var router = express.Router();

router.get('/', function(req, res) {
    return procedure.all().then(function(contact) {
        res.send(contact);
    }, function(err) {
        res.status(500).send(err);
    });
});

router.post('/', function(req, res) {
    var u = req.body;
    console.log(req.body);
    return procedure.post(u)
    .then(function(id) {
        console.log(id);
        res.send(id);
        }, function(err) {
            console.log(err);
            res.status(500).send(err);
        });
    });
module.exports = router;