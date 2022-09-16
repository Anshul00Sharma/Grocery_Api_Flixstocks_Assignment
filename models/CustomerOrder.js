// importing mongoose instance
const mongoose = require("mongoose");

//creating customerOrder Schema that contain customer details
const customerOrderSchema = new mongoose.Schema(
  {
    totalPrice: {
      type: Number,
    },
    paymentInfo: {
      type: String,
      enum: ["COD", "NetBanking", "UPI"],
      required: true,
    },
    productList: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ProductDetails",
      },
    ],
  },
  {
    timestamps: true,
  }
);

//passing the customerSchema instance to mongoose.model
const CustomerOrder = mongoose.model("CustomerOrder", customerOrderSchema);

//exporting the schema to be used further
module.exports = CustomerOrder;
