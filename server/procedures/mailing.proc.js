var db = require('../config/db');

exports.post = function(u) {
    return db.empty('AddMailing (?,?,?,?,?,?)', [u.name, u.email, u.phone, u.date, u.referral, u.state]);
}