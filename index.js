const express = require("express");
const app = express();
const request = require("request");
const OAuth = require("oauth-1.0a");
const crypto = require("crypto");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const https = require("https");
const { SHA256 } = require("crypto-js");
require("dotenv").config();

//const userRouter = require('./routers/user');

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.get("/getdatos/:objeto", function (req, res) {
    try {
        //console.log(JSON.stringify(getData()));
        const NetSuiteOauth = require("netsuite-tba-oauth");

        //const objeto = "getNacionalidad"; //getNacionalidad
        //console.log(req.objeto)
        const object = req.params.objeto;
        const url = `https://4940254.restlets.api.netsuite.com/app/site/hosting/restlet.nl?script=1195&deploy=1&recordtype=${object}`;

        const method = "GET";
        const consumerKey = process.env.CONSUMERKEY;
        const consumerSecret = process.env.CONSUMER_SECRET;
        const tokenId = process.env.TOKEN_ID;
        const tokenSecret = process.env.TOKEN_SECRET;
        const account = process.env.ACCOUNT;

        const oauth = new NetSuiteOauth(
            url,
            method,
            consumerKey,
            consumerSecret,
            tokenId,
            tokenSecret,
            account
        );

        return oauth
            .get()
            .then((response) => response)
            .then((result) => {
                return res.send(result);
            })
            .catch((err) => {
                return res.send(err);
            });
    } catch (error) {
        res.send("Error", error);
    }
});

app.get("/getdatos/:objeto/:id", function (req, res) {
    try {
        //console.log(JSON.stringify(getData()));
        const NetSuiteOauth = require("netsuite-tba-oauth");

        //const objeto = "getNacionalidad"; //getNacionalidad
        //console.log(req.objeto)
        const object = req.params.objeto;
        const id = req.params.id;

        const url = `https://4940254.restlets.api.netsuite.com/app/site/hosting/restlet.nl?script=1195&deploy=1&recordtype=${object}&id=${id}`;

        const method = "GET";
        const consumerKey = process.env.CONSUMERKEY;
        const consumerSecret = process.env.CONSUMER_SECRET;
        const tokenId = process.env.TOKEN_ID;
        const tokenSecret = process.env.TOKEN_SECRET;
        const account = process.env.ACCOUNT;

        const oauth = new NetSuiteOauth(
            url,
            method,
            consumerKey,
            consumerSecret,
            tokenId,
            tokenSecret,
            account
        );

        return oauth
            .get()
            .then((response) => response)
            .then((result) => {
                return res.send(result);
            })
            .catch((err) => {
                return res.send(err);
            });
    } catch (error) {
        res.send("Error", error);
    }
});

app.post("/postdatos/:objeto", function (req, res) {
    try {
        //console.log(JSON.stringify(getData()));
        const NetSuiteOauth = require("netsuite-tba-oauth");

        //const objeto = "getNacionalidad"; //getNacionalidad
        //console.log(req.objeto)
        const object = req.params.objeto;

        const datos = JSON.stringify([{ nombre: "Fleirin" }]);
        const url = `https://4940254.restlets.api.netsuite.com/app/site/hosting/restlet.nl?script=1195&deploy=1`;

        const method = "POST";
        const consumerKey = process.env.CONSUMERKEY;
        const consumerSecret = process.env.CONSUMER_SECRET;
        const tokenId = process.env.TOKEN_ID;
        const tokenSecret = process.env.TOKEN_SECRET;
        const account = process.env.ACCOUNT;

        const oauth = new NetSuiteOauth(
            url,
            method,
            consumerKey,
            consumerSecret,
            tokenId,
            tokenSecret,
            account
        );

        return oauth
            .post(req.body)
            .then((response) => response)
            .then((result) => {
                return res.send(result);
            })
            .catch((err) => {
                return res.send(err);
            });
    } catch (error) {
        res.send("Error", error.message);
    }
});

app.listen(process.env.PORT);
