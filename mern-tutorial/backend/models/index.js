const mongoose = require ('mongoose');
mongoose.Promise = global.Promise;

let db = {};

db.mongoose = mongoose;

db.SingleBlog = require ('./SingleBlog');

module.exports = db;
