const express = require("express");
const router = express.Router();

const {
    handelGenerateShortURL,
} = require("../controller/url")



// now here we going to start to making the router 

router.post("/", handelGenerateShortURL);




module.exports = router;
