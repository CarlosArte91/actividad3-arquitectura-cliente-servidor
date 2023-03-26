/**
 * Se importa el modelo user de la base de datos.
 */
const User = require("../models/user.model");

/**
 * Crear un nuevo usuario
 */
async function createUser (req, res) {
  const { body } = req;
  const newUser = new User(body);
  await newUser.save();
  res.json({response: "El usuario se ha creado con exito"});
};

/**
 * Obtener todos los usuarios
 */
async function readUsers (req, res) {
  const users = await User.find();
  res.json(users);
};

/**
 * Actualizar la información de un usuario
 */
async function updateUser (req, res) {
  const { id } = req.params;
  const { body } = req;
  await User.findByIdAndUpdate(id, body);
  res.json({response: "El usuario se ha actualizado con exito"});
};

/**
 * Eliminar un usuario de la base de datos
 */
async function deleteUser (req, res) {
  const { id } = req.params;
  await User.findByIdAndDelete(id);
  res.json({response: "El usuario se ha eliminado"});
};

/**
 * Se exportan los metodos para cada endpoint
 */
module.exports = {
  createUser,
  readUsers,
  updateUser,
  deleteUser,
};
