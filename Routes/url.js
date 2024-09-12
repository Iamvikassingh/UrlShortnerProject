const express = require("express");
const router = express.Router();
const {
    handelGenerateShoerURL,
    hendleShortidurl,
} = require("../controller/url")



// now here we going to start to making the router 

router.post("/", handelGenerateShoerURL);
router.get("/:smallId", hendleShortidurl);


module.exports = router
