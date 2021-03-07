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
  const search = req.params.query;
  const query = "SELECT * FROM product WHERE name LIKE '%" + search + "%'";
  conection.query(query, (err, rows) => {
    if (rows) {
      console.log(rows);
      res.status(200).send(rows);
    }
  });
};
