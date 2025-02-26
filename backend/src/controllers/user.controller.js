import * as UserServices from "../services/user.service.js";

export const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "ID not found" });
    }

    const user = await UserServices.getUserById(id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
  } catch (error) {
    next(error);
  }
};

// Obtener todos los usuarios
export const getAllUsers = async (req, res, next) => {
  try {
    const users = await UserServices.getAllUsers();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

// Crear un usuario

export const createUser = async (req, res, next) => {
  try {
    const userData = req.body;

    if (!userData.email) {
      return res.status(400).json({ error: "The email es required" });
    }

    const newUser = await UserServices.createUser(userData);
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};

// Actualizar un usuario

export const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userData = req.body;

    if (!id) {
      return res.status(400).json({ error: "ID not found" });
    }

    const updatedUser = await UserServices.updateUser(id, userData);
    res.json(updatedUser);
  } catch (error) {
    next(error);
  }
};

// Eliminar Usuarios

export const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "ID not found" });
    }

    await UserServices.deleteUser(id);
    res.json({ message: "user successfully deleted" });
  } catch (error) {
    next(error);
  }
};