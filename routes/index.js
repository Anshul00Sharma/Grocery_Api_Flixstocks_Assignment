// importing express instance
const express = require("express");
// getting express router
const router = express.Router();

//Further routes of groceryAPI
router.use("/customer", require("./customer"));
router.use("/product", require("./product"));
router.use("/order", require("./order"));

//exporting the router
module.exports = router;
