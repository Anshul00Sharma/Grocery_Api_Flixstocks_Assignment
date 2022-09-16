// importing mongoose instance
const mongoose = require("mongoose");

//creating ProductDetails Schema that contain customer details
const productDetailsSchema = new mongoose.Schema(
  {
    productInfo: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
    },
    productCategory: {
      type: String,
      enum: [
        "Beverages",
        "Bread/Bakery",
        "Dairy",
        "Frozen Foods",
        "Meat",
        "Cleaners",
      ],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//passing the productDetailsSchema instance to mongoose.model
const ProductDetails = mongoose.model("ProductDetails", productDetailsSchema);

//exporting the schema to be used further
module.exports = ProductDetails;
