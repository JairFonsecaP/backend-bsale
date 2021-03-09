/**
 * IMPORTACÓN DE MODULOS
 */
const express = require("express");
const router = require("./routes/index");
const cors = require("cors");

/*INICIALIZACIÓN DE EXPRESS*/
const app = express();
/*USO DE CORS PARA PERMITIR PETICIONES DE TODOS LOS ORIGENES*/
app.use(cors());

/*NECESARIO PARA PODER ENVIAR Y RECIBIR LOS JSON*/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*USAR LAS RUTAS*/
app.use("/api", router);

/*ASIGNACION DE PUERTO*/
app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () => {
  console.log("Server on port " + app.get("port") + " on dev");
});
