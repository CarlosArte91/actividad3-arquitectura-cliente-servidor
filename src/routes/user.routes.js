/**
 * Se importa express para crear las rutas de la API
 * y se importan los metodos a utilizar en cada endpoint
 */
const express = require("express");
const {
  readUsers,
  createUser,
  updateUser,
  deleteUser
} = require("../controllers/user.controller");

const router = express.Router();

/**
 * Creación de las rutas que realizarán el CRUD para usuarios
 */
router.post("/users", createUser);
router.get("/users", readUsers);
router.patch("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

module.exports = router;
