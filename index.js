const express = require("express");
const app = express();
const PORT = 8000;
const urlRoute = require('./Routes/url')
const { connectionToDB } = require("./connectionToDB")
const {
    hendleShortIdUrl,
    handelGetAnalytics,
    handelDeleteLink,
} = require("./controller/url")

connectionToDB("mongodb://127.0.0.1:27017/ShortURlDB")

app.use(express.json())
app.use("/url", urlRoute); // here we import the router.

app.get('/:smallId', hendleShortIdUrl, () => {
    resp.send(`your short urls is : ${smallId}`);
});

app.get('/analytics/:smallId', handelGetAnalytics);

app.delete('/deletelink/:smallId', handelDeleteLink)

app.listen(PORT, () => console.log(`Server is Started at PORT : ${PORT}`))