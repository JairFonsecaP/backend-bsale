const router = require("express").Router();
const productController = require("../../controllers/productController");

router.get("/list", productController.list);
router.get("/search/:query", productController.search);

module.exports = router;
