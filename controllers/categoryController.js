/**
 * IMPORTACIÓN DE MODULOS
 */
const mysql = require("mysql");
const config = require("../config/config");

/**CONEXIÓN A DB*/
const conection = mysql.createConnection(config);
conection.connect((err) => {
  if (err) {
    throw err;
  }
});

/**
 * LISTA TODAS LAS CATEGORIAS QUE HAY
 * @param {*} req
 * @param {TODAS LAS CATEGORIAS} res
 */
exports.list = (req, res) => {
  try {
    conection.query("SELECT * FROM category", (err, rows) => {
      if (rows) {
        res.status(200).send(rows);
      } else {
        res.status(404).send({
          message: "No se han encontrado categorias",
        });
      }
    });
  } catch (err) {
    res.status(500).send({
      message: "Error al cargar los categorias",
    });
  }
};
