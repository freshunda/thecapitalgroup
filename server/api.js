var express = require('express');
var prospects = require('./controllers/prospects.ctrl');
var agents = require('./controllers/agents.ctrl');
var mailing = require('./controllers/mailing.ctrl');
var galleries = require('./controllers/galleries.ctrl');

var router = express.Router();
router.use('/prospects', prospects);
router.use('/agents', agents);
router.use('/mailing', mailing);
router.use('/galleries', galleries);

module.exports = router;