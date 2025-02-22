const express = require("express");
const routerAPI = express.Router();
const { getUsersAPI } = require("../controllers/apiController");
// router.Method('/route', handler);
routerAPI.get("/", (req, res) => {
  res.send("hello world with api!");
});

routerAPI.get("/abc", (req, res) => {
  res.status(202).json({ data: "hello world first API!" });
});

routerAPI.get("/users", getUsersAPI);
module.exports = routerAPI;
