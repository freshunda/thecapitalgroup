var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var mysql = require('mysql');
var configurePassport = require('./config/passport');
var api = require('./api');
var prerender = require('prerender-node');
var routeMw = require('./middleware/routing.mw');

var app = express();

app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(require('prerender-node').set('prerenderToken', process.env.PRERENDER_SECRET_TOKEN));

configurePassport(app);

app.use('/api', api);

app.get('*', function(req, res, next){
    if(routeMw.isAsset(req.url)){
        next();
    } else{
        res.sendFile(path.join(__dirname, '../client/index.html'));
    }
})

app.listen(process.env.PORT || 3000);