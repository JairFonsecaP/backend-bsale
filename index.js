const express = require("express");
const router = require("./routes/index");
const cors = require("cors");

const app = express();

app.use(cors());

/*NECESARIO PARA PODER ENVIAR Y RECIBIR LOS JSON*/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*IMPORTA LAS RUTAS*/
app.use("/api", router);

/*ASIGNACION DE PUERTO*/
app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () => {
  console.log("Server on port " + app.get("port") + " on dev");
});
