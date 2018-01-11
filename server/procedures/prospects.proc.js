var db = require('../config/db');

exports.readByEmail = function(email) {
    return db.row('GetUserByEmail(?)', [email]);
}
exports.all = function() {
    return db.rows('GetAllProspects()', []);
}
exports.post = function(u) {
    return db.empty('AddProspect(?,?,?,?,?,?', [u.name, u.email, u.phone, u.date, u.referral, u.state]);
}
exports.destroy = function(id) {
    return db.empty('DeleteProspect(?)', [id]);
}