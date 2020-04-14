import bodyParser from "body-parser";
import express from "express";
import next from "next";
import nextI18NextMiddleware from "next-i18next/middleware";
import {nextI18Next} from "../i18n";

const path = require('path');

require("dotenv").config({path: path.join(__dirname, '.env')});

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

(async () => {
    await app.prepare();
    const server = express();
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({extended: true}));
    server.use(nextI18NextMiddleware(nextI18Next));
    server.get('*', (req, res) => handle(req, res));

    await server.listen(port);
    console.log(`> Ready on http://localhost:${port}`) // eslint-disable-line no-console
})();
