const express = require("express");
const router = express.Router();
const orderDetails = require("../models/orderDetails");

// Route to Cart
router.get("/", async (req, res) =>
  orderDetails
    .findAll()
    .then((cart) => {
      res.render("cart", {
        cart,
      });
    })
    .catch((err) => console.log(err))
);

// res.render("cart");
module.exports = router;
