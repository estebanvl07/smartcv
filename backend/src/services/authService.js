import {prisma} from "../config/prismaConnect.js";
import bcrypt from "bcrypt";

export const registerUser = async(email, password) => {
   //verificacion si el usuario existe
    const existingUser = await prisma.user.findUnique({
     where: {
         email: email
     }
 });
 if(existingUser) {
     throw new Error("Usuario ya existe");
 }
// emcriptar la contraseña 
 const hashedPassword = await bcrypt.hash(password,10); 
 //crear el usuario si no existe en la BD
 const newUser = await prisma.user.create({
     data: {
        email:email,
        password: hashedPassword 
    }
    });

return newUser;
};

