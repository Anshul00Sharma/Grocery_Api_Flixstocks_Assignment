// importing the models of Product
const Product = require("../models/ProductDetails");

// Add a Product
module.exports.create = async function (req, res) {
  // catching server error
  try {
    let product = await Product.create(
      // providing customer to mongoose model
      req.body
    );
    // conformation api response
    if (product) {
      return res.status(200).json({
        message: "Product Added Successfully!",
        product,
      });
    } else {
      return res.status(421).json({
        message: "Error while adding Product : Bad Request",
      });
    }
  } catch (err) {
    console.log("Error :" + err);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

// update price
module.exports.updatePrice = async function (req, res) {
  // catching server error
  try {
    let product = await Product.findOne({
      productInfo: req.params.productInfo,
    }).exec();
    // conformation api response
    if (product) {
      product.price = req.body.price;
      product.save();
      return res.status(200).json({
        message: "Price changed Successfully!",
        product,
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
