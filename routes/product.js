// import express
const express = require("express");
// calling router
const router = express.Router();
// importing customer controller
const productController = require("../controllers/productController");

//to add a product
router.post("/create", productController.create);
// to update price
router.put("/:productInfo", productController.updatePrice);

//exporting the router
module.exports = router;
