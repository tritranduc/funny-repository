"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = require("dotenv");
var express = require("express");
var cors = require("cors");
var socket_io_1 = require("socket.io");
var http_1 = require("http");
var body_parser_1 = require("body-parser");
var morgan = require("morgan");
dotenv.config();
var port;
if (process.env.PORT) {
    port = parseInt(process.env.PORT, 10);
}
else {
    port = 8000;
}
var app = express();
var server = http_1.createServer(app);
var io = new socket_io_1.Server(server);
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(body_parser_1.urlencoded({ extended: false }));
// parse application/json
app.use(body_parser_1.json());
app.use(morgan("dev"));
app.get("/", function (req, res) {
    return res.send("server start");
});
server.listen(port, function () {
    console.log("app is listen at port : " + port);
});
