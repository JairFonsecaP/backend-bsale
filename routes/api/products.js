/**
 * IMPORTACION DE MODULOS Y RUTAS
 */
const router = require("express").Router();
const productController = require("../../controllers/productController");

/*USO DE CONTROLADORES */
router.get("/list", productController.list);
router.get("/search/:query", productController.search);
router.get("/detail/:id", productController.detail);

module.exports = router;
