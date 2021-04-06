const mongoose = require('mongoose');

const multerschema = new mongoose.Schema({
    fieldname: String,
    originalname: String,
    encoding: String,
    mimetype: String,
    buffer: Buffer,
    size: Number
});

module.exports = mongoose.model("multer", multerschema);