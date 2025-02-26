import * as UserServices from "../services/user.service.js";

export const getUserById = async(req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "Id not found" }); // Se detiene la ejecución para evitar errores continuos
    }

    const response = await UserServices.getUserById(id);
    // Caso en el que el usuario no exista
    if(!response){
      return res.status(404).json({error: "user not found"}); //evitamos devolver Null o undefined
    }
    res.json(response);

  } catch (error) {
    next(error);
  }
};


// Obtener todos los usuarios
export const getAllUsers = async(req, res, next)=>{
  try{
    const users = await UserServices.getAllUsers();

    if(!users || users,length === 0){
      return res.status(404).json({error: "No users found"});
    }

    res.json(users);

  }catch(error){
    next(error);
  }
}

// Crear un usuario

export const createUsers = async (req, res, next)=>{
  try{
    const  {name, email, password} = req.body;

    if (!name || !email || !password){
      return res.status(400).json({error: "Missing required fields"});
    }

    const newUser = await UserServices.createUsers({name, email, password});

    res.status(200).json(newUser);
  }catch(error){
    next(error);
  }
}

// Actualizar un usuario

export const updateUsers = async (req, res, next)=>{
  try{
    const {id} = req.params;
    const data  = req.body;

    if(!id){
      return res.status(400).json({error: "id not found"});
    }

    const updatedUser = await UserServices.updateUsers(id, data);

    if(!updatedUser){
      return res.status(404).json({error: "User not found"});
    }

    res.json(updatedUser);
  }catch(error){
    next(error);
  }
}

// Eliminar Usuarios

export const deleteUsers = async(req, res,next)=>{
  try{
    const {id} = req.params;

    if (!id){
      return res.status(400).json({error:"Id not found"});
    }

    const deletedUser = await UserServices.deleteUsers(id);

    if (!deletedUser){
      return res.status(404).json({error: "User not found"});
    }

    res.json({Message:"User deleted successfully"});
  }catch(error){
    next(error);
  }
}