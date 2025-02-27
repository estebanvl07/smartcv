import { decode } from "jsonwebtoken";
import { verifyToken } from "../config/jwtConfig";

export const isAuthenticated = (req, res, next)=>{
    const token = req.token["authorization"]?.split(" ")[1];

    if(!token){
        return res.status(401).json({message:"No autorizado"});
    }

    try{
        const decoded = verifyToken(token);
        req.user = decoded; // Guarda la información del usuario en la solicitud
        next();
    }catch(error){
        return res.status(403).json({message:"Wrong token"});
    }
}