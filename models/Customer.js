// importing mongoose instance
const mongoose = require("mongoose");

//creating Customer Schema that contain customer details
const customerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
    },
    customerOrder: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CustomerOrder",
      },
    ],
  },
  {
    timestamps: true,
  }
);

//passing the customerSchema instance to mongoose.model
const Customer = mongoose.model("Customer", customerSchema);

//exporting the schema to be used further
module.exports = Customer;
