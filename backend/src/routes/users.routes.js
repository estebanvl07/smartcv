import { Router } from "express";
import { 
    getUserById,
    getAllUsers,
    createUsers,
    updateUsers,
    deleteUsers
 } from "../controllers/user.controller.js";

const router = Router();


// Obtiene un usuario por id
router.get("/:id", getUserById);

// Obtener todos los usuarios
router.get("/", getAllUsers);

// Crear Usuarios
router.post("/", createUsers);

// Actualizar usuarios por id
router.put("/:id", updateUsers)

// Eliminar usuaros
router.delete("/:id", deleteUsers)


export default router;
