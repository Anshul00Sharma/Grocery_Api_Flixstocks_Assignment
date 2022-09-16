// importing the models of Customer
const Customer = require("../models/Customer");

// Add a Customer
module.exports.create = async function (req, res) {
  // catching server error
  try {
    let customer = await Customer.create(
      // providing customer to mongoose model
      req.body
    );
    // conformation api response
    if (customer) {
      return res.status(200).json({
        message: "Customer Added Successfully!",
        customer,
      });
    } else {
      return res.status(421).json({
        message: "Error while adding Customer : Bad Request",
      });
    }
  } catch (err) {
    console.log("Error :" + err);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

// Get all Customer
module.exports.getAllCustomer = async function (req, res) {
  // catching server error
  try {
    let customer = await Customer.find();
    // conformation api response
    if (customer) {
      return res.status(200).json({
        message: "Here are all customer",
        customer,
      });
    } else {
      return res.status(421).json({
        message: "Error : Bad Request",
      });
    }
  } catch (err) {
    console.log("Error :" + err);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
// method to fetch customer Details with maximum Orders
module.exports.getCustomerWithMaxOrder = async function (req, res) {
  // catching server error
  try {
    let maxLength = 0;
    let customers = await Customer.find();
    // conformation api response
    if (customers) {
      for (let customer of customers) {
        if (customer.customerOrder.length > maxLength) {
          maxLength = customer.customerOrder.length;
        }
      }
      let customersMaxOrder = await Customer.find({
        customerOrder: { $size: maxLength },
      });
      return res.status(200).json({
        message: "Here is Customer with max orders",
        customersMaxOrder,
      });
    } else {
      return res.status(421).json({
        message: "Error : Bad Request",
      });
    }
  } catch (err) {
    console.log("Error :" + err);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
