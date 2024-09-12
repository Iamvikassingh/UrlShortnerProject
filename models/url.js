const mongoose = require("mongoose");

const urlSChema = new mongoose.Schema({
    url: {
        type: String,
        required: true,
        unique: true,
    },
    redirectURL: {
        type: String,
        required: true,

    },
    visitHistory: [
        {
            timestamp: {
                type: Number
            }
        }
    ]
}, { timestamps: true });

const URL = mongoose.model("url", urlSChema); // here is the url is the collection name in the mongoDB with the name of urls

module.exports = URL;