/**
 * IMPORTACION DE MODULOS Y RUTAS
 */
const router = require("express").Router();
const categoryController = require("../../controllers/categoryController");

/*USO DE CONTROLADORES */
router.get("/list", categoryController.list);

module.exports = router;
