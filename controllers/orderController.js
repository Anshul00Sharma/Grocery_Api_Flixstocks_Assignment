// importing the models of Customer
const Customer = require("../models/Customer");
const CustomerOrder = require("../models/CustomerOrder");
const Product = require("../models/ProductDetails");

// Add an Order
// example request
// Post :-"http://localhost:8000/order/create"
module.exports.create = async function (req, res) {
  // catching server error
  try {
    let customer = await Customer.findOne({ username: req.body.username });
    if (customer) {
      let customerOrder = await CustomerOrder.create(
        // providing customer to mongoose model
        req.body.order
      );
      if (customerOrder) {
        // getting all the products from database with help of productInfo
        for (let productItem of req.body.products) {
          let products = await Product.findOne({ productInfo: productItem });
          if (products) {
            customerOrder.productList.push(products);
          } else {
            return res.status(421).json({
              message: "Error while adding product : Bad Request",
            });
          }
        }
        customerOrder.save();
        customer.customerOrder.push(customerOrder);
        customer.save();
        return res.status(200).json({
          message: "order is added Successfully!",
          customerOrder,
        });
      } else {
        return res.status(421).json({
          message: "Error while adding CustomerOrder : Bad Request",
        });
      }
    } else {
      return res.status(421).json({
        message: "Error while finding Customer : Bad Request",
      });
    }
  } catch (err) {
    console.log("Error :" + err);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
// example request
// Get :-"http://localhost:8000/order/:username";
module.exports.getOrderList = async function (req, res) {
  // catching server error
  try {
    let customer = await Customer.findOne({
      username: req.params.username,
    }).exec();
    // conformation api response
    if (customer) {
      let orders = customer.customerOrder;
      let orderList = [];
      for (orderId of orders) {
        let orderdetails = await CustomerOrder.findById(orderId);
        if (orderdetails) {
          orderList.push(orderdetails);
        } else {
          return res.status(421).json({
            message: "Error  : Bad Request",
          });
        }
      }
      return res.status(200).json({
        message: "Here is Order Details",
        orderList,
      });
    } else {
      return res.status(421).json({
        message: "Error while changing price : Bad Request",
      });
    }
  } catch (err) {
    console.log("Error :" + err);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
