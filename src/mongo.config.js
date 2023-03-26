const mongoose = require("mongoose");

/**
 * Configuración de mongoose para conectarlo con la base de datos
 */
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB actividad3"))
  .catch((error) => console.error(error));

module.exports = mongoose;
