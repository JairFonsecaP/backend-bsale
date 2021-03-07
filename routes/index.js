const router = require("express").Router();
const apiCategories = require("./api/categories");
const apiRouterProducts = require("./api/products");

router.use("/category", apiCategories);
router.use("/products", apiRouterProducts);

module.exports = router;
