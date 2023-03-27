const express = require("express");
const routes = express.Router();

// ROUTES
const blogRoutes = require("../blog/blogRoute");

// USE ROUTES
routes.use("/api/", blogRoutes);

module.exports = routes;
