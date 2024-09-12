const mongoose = require("mongoose");

async function connectionToDB(URl) {
    return await mongoose.connect(URl)
        .then(() => {
            console.log("MongoDb is Connected");
        })
        .catch(() => {
            console.log("error occured in connecting DataBase");
        })
}

module.exports = {
    connectionToDB
}