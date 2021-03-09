/**
 * IMPORTACION DE MODULOS Y RUTAS
 */
const router = require("express").Router();
const apiCategories = require("./api/categories");
const apiRouterProducts = require("./api/products");

/*SE GENERAN LAS RUTAS PARA CATEGORIAS Y PRODUCTOS */
router.use("/category", apiCategories);
router.use("/products", apiRouterProducts);

module.exports = router;
