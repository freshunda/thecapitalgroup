var db = require('../config/db');

exports.readByEmail = function(email) {
    return db.row('GetUserByEmail(?)', [email]);
}
exports.post = function(u, hash) {
    return db.empty("AddUser(?),", [u.email, hash]);
}
exports.destroy = function(id) {
    return db.empty('DeleteUser(?)', [id]);
}