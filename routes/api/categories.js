const router = require("express").Router();
const categoryController = require("../../controllers/categoryController");

router.get("/list", categoryController.list);

module.exports = router;
