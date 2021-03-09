const mysql = require("mysql");

const config = require("../config/config");

/**CONEXIÓN A DB*/
const conection = mysql.createConnection(config);
conection.connect((err) => {
  if (err) throw err;
});

exports.list = (req, res) => {
  conection.query("SELECT * FROM product", (err, rows) => {
    if (rows) {
      res.status(200).send(rows);
    } else {
      res.status(404).send({
        message: "No se han encontrado productos",
      });
    }
  });
};

exports.search = (req, res) => {
  let search = req.params.query.split("+");

  search = search.reduce((a, c) => a + c + " ", "").slice(0, -1);

  const query = "SELECT * FROM product WHERE name LIKE '%" + search + "%'";
  conection.query(query, (err, rows) => {
    if (rows) {
      res.status(200).send(rows);
    }
  });
};

exports.detail = (req, res) => {
  const id = req.params.id;
  const query = "SELECT * FROM product WHERE id = " + id;
  conection.query(query, (err, rows) => {
    if (rows) {
      res.status(200).send(rows[0]);
    } else {
      res.status(404).send({ message: "Producto no encontrado :(" });
    }
  });
};
