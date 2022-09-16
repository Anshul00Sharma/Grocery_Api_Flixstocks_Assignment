// importing the models of Customer
const Customer = require("../models/Customer");

// Add a Customer
// Example request
// Post request :- "http://localhost:8000/customer/create"
// body :-
// {
//     "username":"anshul123",
//     "name":"Anshul Sharma",
//     "email":"anshul@gmail.com",
//     "phone":99888888
// }
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
      // error Handling
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

// Get all Customer details
// Example request
// Get request :- "http://localhost:8000/customer/getAllCustomer"
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
// Example request
// Get :- "http://localhost:8000/customer/getCustomerWithMaxOrder"
module.exports.getCustomerWithMaxOrder = async function (req, res) {
  // catching server error
  try {
    let maxLength = 0;
    let customers = await Customer.find();

    if (customers) {
      for (let customer of customers) {
        if (customer.customerOrder.length > maxLength) {
          maxLength = customer.customerOrder.length;
        }
      }
      let customersMaxOrder = await Customer.find({
        customerOrder: { $size: maxLength },
      });
      // conformation api response
      return res.status(200).json({
        message: "Here is Customer with max orders",
        customersMaxOrder,
      });
    } else {
      // error handling
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
