const express = require("express");
const path = require("path");

const itemRouter = require("./itemRoutes");

const app = express();

app.use(express.static(path.join(__dirname, "cl/build")));

app.use(express.json());

// MOUNT THE ROUTER

app.use("/", itemRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "cl/build", "index.html"));
});

module.exports = app;
