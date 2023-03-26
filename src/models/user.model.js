const mongoose = require("mongoose");

/**
 * Se crea el esquema para la colección de usuarios.
 * Se define cada uno de los campos requeridos.
 */
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  }
});

/**
 * Se define el modelo con el esquema creado y se exporta.
 */
const User = mongoose.model("User", userSchema);

module.exports = User;
