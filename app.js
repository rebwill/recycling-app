const express = require("express");
// const morgan = require("morgan");

const itemRouter = require("./itemRoutes");

const app = express();

app.use(express.json());

// MOUNT THE ROUTER

app.use("/", itemRouter);

module.exports = app;
