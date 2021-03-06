var express = require('express');
var procedures = require('../procedures/agents.proc');
var auth = require('../middleware/auth.mw');
var passport = require('passport');
var utils = require('../config/utils');
var eSvc = require('../services/email.svc');

var router = express.Router();

router.post('/login', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
        if(err) {
            console.log(err);
            return res.sendStatus(500);
        }
        if(!user) {
            return res.status(401).send(info);
        }
        req.logIn(user, function(err) {
            if(err) {return res.sendStatus(500);}
            else {
                eSvc.sendEmail(user.email,
                'You have logged in',
                'You have logged in! If you think this was an error, contact us at flassiter@aol.com')
                return res.send(user);
            };
        });
    }) (req, res, next);
});
router.get('/logout', function(req, res) {
    req.session.destroy(function() {
        req.logOut();
        res.sendStatus(204);
    });
});
router.all('*', auth.isLoggedIn);

router.get('/', auth.isAdmin, function(req, res) {
    return procedures.all().then(function (users) {
        res.send(users);
    }, function(err) {
        res.status(500).send(err);
    });
});
router.get('/:id', auth.isAdmin, function(req, res) {
    return procedures.read(req.params.id).then(function(user) {
        res.send(user);
    }), function(err) {
        res.status(500).send(err);
    };
});
router.put('/:id', auth.isAdmin, function(req, res) {
    return procedures.update(req.body.email, req.params.id)
    .then(function(success) {
        res.sendStatus(204);
    }, function(err) {
        console.log(err);
        res.status(500).send(err);
    });
});
router.delete('/:id', auth.isAdmin, function(req, res) {
    return procedures.destroy(req.params.id)
    .then(function() {
        res.sendStatus(201);
    }), function (err) {
        console.log(err);
        res.status(500).send(err);
    };
});
router.get('/me', function(req, res) {
    res.send(req.user);
});

module.exports = router;