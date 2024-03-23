const express = require("express");
const sellAndBuyRouter = require("./routers/sellAndBuy");
const bodyParser = require("body-parser");
require("./mongoose/connect_db/mongoose")

const app = express();

app.use(express.json());
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "GET, DELETE, PATCH");
        return res.status(200).end();
    }
    next();
});

app.use('/sellProduct', sellAndBuyRouter);

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({ error: error.message });
});

module.exports = app;

