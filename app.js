const express = require("express");

const itemRouter = require("./itemRoutes");

const app = express();

app.use(express.static(path.join(__dirname, "cl/build")));

app.use(express.json());

// MOUNT THE ROUTER

app.use("/", itemRouter);

module.exports = app;
