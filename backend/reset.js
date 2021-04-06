const mongoose = require('mongoose');

const Multer = require('./models/multer');

const resetDB = async () => {
    console.log("reseting db");

    await Multer.deleteMany({})
                .then(() => console.log("removed all data."))
                .catch((err) => console.error("error: could not remove data"));
};


module.exports = resetDB;