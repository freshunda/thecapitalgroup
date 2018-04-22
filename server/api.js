var express = require('express');
var apply = require('./controllers/apply.ctrl');
var agents = require('./controllers/agents.ctrl');
var mailing = require('./controllers/mailing.ctrl');
var galleries = require('./controllers/galleries.ctrl');

var router = express.Router();
router.use('/apply', apply);
router.use('/agents', agents);
router.use('/mailing', mailing);
router.use('/galleries', galleries);

module.exports = router;