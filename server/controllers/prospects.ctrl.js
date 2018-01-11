var express = require('express');
var procedure = require('../procedures/prospects.proc');
var eSvc = require('../services/email.svc');

var router = express.Router();

router.get('/', function(req, res) {
    return procedures.all().then(function(prospects) {
        res.send(prospects);
    }, function(err) {
        res.status(500).send(err);
    });
});

router.post('/', function(req, res) {
    var u = req.body;
    return procedures.post(u)
    .then(function(success) {
        eSvc.sendEmail(req.body.fromEmail, req.body.subject, 'flassiter1@aol.com', req.body.content)
        .then(function(success) {
            console.log('SUCCESS')
            res.send('sent');
        }, function(err) {
            console.log(err);
            res.status(500).send(err);
        });
    });
});
module.exports = router;