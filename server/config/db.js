var mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "fernando",
    password: "lassiter",
    database: "capitalgroup"
});

exports.pool = pool;

exports.empty = function(procedure, values) {
    console.log("empty");
    return sendQuery(procedure, values).then(function() {
        return;
    });
};

exports.row = function(procedure, values) {
    return sendQuery(procedure, values).then(function(resultsSets) {
        return resultsSets[0][0];
    });
};

exports.rows = function(procedure, values) {
    return sendQuery(procedure, values).then(function(resultsSets) {
        return resultsSets[0];
    });
};

function sendQuery(procedure, values) {
    return new Promise(function(fulfill, reject) {
        pool.getConnection(function(err, connection) {
            if(err) {
                console.log(err);
                reject(err);
            } else {
                connection.query('CALL ' + procedure, values, function(err, resultsSets) {
                    connection.release();
                    if(err) {
                        reject(err);
                    } else {
                        fulfill(resultsSets);
                    }
                });
            };
        });
    });
};