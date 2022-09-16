// import express
const express = require("express");
// calling router
const router = express.Router();
// importing customer controller
const orderController = require("../controllers/orderController");

//to add a product
router.post("/create", orderController.create);

// get Order details
router.get("/:username", orderController.getOrderList);

//exporting the router
module.exports = router;
