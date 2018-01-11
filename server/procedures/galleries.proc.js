var db = require("../config/db");

//GET ALL THE APPAREL FROM THE DATABASE
exports.all = function () {
    return db.rows('AllGalleries()', []);
}
//GET ALL THE SINGLE APPAREL FROM THE DATABASE
exports.read = function (id) {
    return db.row('SingleGallery(?)', [id]);
}
