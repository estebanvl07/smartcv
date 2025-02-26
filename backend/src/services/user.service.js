import { prisma } from "../config/prismaConnect.js";

export const getUserById = async (id) => {
  try {
    const userFound = await prisma.user.findFirst({
      where: {
        id,
      },
    });

    if(!userFound){
      throw new Error("User not found")
    }

    return userFound;
  } catch (error) {
    throw error;
  }
};

export const getAllUsers = async()=>{
  try{
    const users = await prisma.user.findMany({
      include: {
        accounts: true,
        cvs: true,
      }
    });
    return users;
  }catch(error){
    throw new Error("Error getting users");
  }
}


export const createUser = async(userData) => {
  try{
    const newUser = await prisma.user.create({
      data: userData,
    });
    return newUser;
  }catch(error){
    throw new Error("Error creating the user")
  }
}

export const updateUser = async()=>{
  try{
    const updatedUser = await prisma.user.update({
      where: {id},
      data: userData,
    });
    return updatedUser;
  }catch(error){
    throw new Error("Error updating user");
  }
}


export const deleteUser = async()=>{
  try{
    const deletedUser = await prisma.user.delete({
      where: {id},
    });
    return {message:"User successfully deleted"};
  }catch(error){
    throw new Error("Error deleting user");
    
  }
}
