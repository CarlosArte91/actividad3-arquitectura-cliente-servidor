/**
 * Se importa la configuración para utilizar variables de entorno
 * y para utilizar el ODM (Object-Document Mapping) mongoose
 * para interactuar con una base de datos no sql como lo es mongo.
 */
require("dotenv").config();
require("./mongo.config");

/**
 * Creación del servicio e invocación de las rutas o endpoints.
 */
const express = require("express");
const app = express();
const userRoutes = require("./routes/user.routes");

app.use(express.json());
app.use("/api", userRoutes)

/**
 * Creación del puerto de conección para el servicio y
 * levantamiento del servicio.
 */
const PORT = process.env.PORT || 9000;

app.listen(PORT, () => console.log(`Listen on port ${PORT}`));
