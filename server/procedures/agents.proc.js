var db = require('../config/db');

exports.readByEmail = function(email) {
    return db.row('getAgentByEmail(?)', [email]);
}
exports.all = function () {
    return db.rows('getAgents');
}
exports.read = function(id) {
    return db.row('getAgent');
}
exports.post = function(u, hash) {
    return db.empty("AddUser(?),", [u.email, hash]);
}
exports.destroy = function(id) {
    return db.empty('DeleteUser(?)', [id]);
}