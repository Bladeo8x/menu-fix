const router = require("express").Router();
const menu = require("../models/menu");

// route to get all dishes
router.get("/menu", async (req, res) => {
  console.log("ERROR");
  // Get all books from the book table
  menu.findAll().then((menuData) => {
    // res.json(menuData);
    const plainMenuData = menuData.map((data) => data.get({ plain: true }));
    // console.log(plainMenuData);
    res.render("menu", { layout: "menu-layout", plainMenuData });
  });
});

module.exports = router;
