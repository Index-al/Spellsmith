const router = require("express").Router();

const homeRoutes = require("./homeRoute");

router.use("/", homeRoutes);

module.exports = router;
