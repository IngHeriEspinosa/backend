const express = require("express");
const app = express();
const request = require("request");
const OAuth = require("oauth-1.0a");
const crypto = require("crypto");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const https = require("https");
require("dotenv").config();

//const userRouter = require('./routers/user');

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const port = 4000;

app.get("/getdatos/:objeto", function (req, res) {
    try {
        //console.log(JSON.stringify(getData()));
        const NetSuiteOauth = require("netsuite-tba-oauth");

        //const objeto = "getNacionalidad"; //getNacionalidad
        //console.log(req.objeto)
        const object = req.params.objeto;
        const url = `https://2045380.restlets.api.netsuite.com/app/site/hosting/restlet.nl?script=384&deploy=1&recordtype=${object}`;

        //const url = 'https://2045380.restlets.api.netsuite.com/app/site/hosting/restlet.nl?script=384&deploy=1&recordtype=getNacionalidad';
        const method = process.env.METHOD;
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

        const url = `https://2045380.restlets.api.netsuite.com/app/site/hosting/restlet.nl?script=384&deploy=1&recordtype=${object}&id=${id}`;

        //const url = 'https://2045380.restlets.api.netsuite.com/app/site/hosting/restlet.nl?script=384&deploy=1&recordtype=getNacionalidad';
        const method = "GET";
        const consumerKey =
            "8134c772e640cd6df9089ecbaa184c2eae0c23f7c6aead88932fc5f7fce9d183";
        const consumerSecret =
            "5619f628ba4efd29929d8c169d3489b8e7e75d29a3ee43d6ff10e07b23dc7382";
        const tokenId =
            "7f1b00b6328c3418bb6de9e2f01a1cc5edb2cf5a761bfa2decc3352b480b0991";
        const tokenSecret =
            "47cd2f0f5f0930c4ff3c7eb24d6f5eda5b5c7b7267055398e93b4bd2a957f8a3";
        const account = "2045380";

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
        const url = `https://2045380.restlets.api.netsuite.com/app/site/hosting/restlet.nl?script=384&deploy=1`;

        //const url = 'https://2045380.restlets.api.netsuite.com/app/site/hosting/restlet.nl?script=384&deploy=1&recordtype=getNacionalidad';
        const method = "POST";
        const consumerKey =
            "8134c772e640cd6df9089ecbaa184c2eae0c23f7c6aead88932fc5f7fce9d183";
        const consumerSecret =
            "5619f628ba4efd29929d8c169d3489b8e7e75d29a3ee43d6ff10e07b23dc7382";
        const tokenId =
            "7f1b00b6328c3418bb6de9e2f01a1cc5edb2cf5a761bfa2decc3352b480b0991";
        const tokenSecret =
            "47cd2f0f5f0930c4ff3c7eb24d6f5eda5b5c7b7267055398e93b4bd2a957f8a3";
        const account = "2045380";

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
