const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 8000;
const urlRoute = require('./Routes/url')
const { connectionToDB } = require("./connectionToDB")

connectionToDB("mongodb://127.0.0.1:27017/ShortURlDB")

app.use(express.json())
app.use("/url", urlRoute); // here we import the router.


app.listen(PORT, () => console.log(`Server is Started at PORT : ${PORT}`))