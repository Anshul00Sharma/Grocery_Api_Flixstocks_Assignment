// import express
const express = require("express");
// callsing router
const router = express.Router();
// importing customer controller
const customerController = require("../controllers/customerController");

//To add a Customer
router.post("/create", customerController.create);

//To get all Customer
router.get("/getAllCustomer", customerController.getAllCustomer);
router.get(
  "/getCustomerWithMaxOrder",
  customerController.getCustomerWithMaxOrder
);
// get customer with max order

//exporting the router
module.exports = router;
