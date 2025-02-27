import jwt, { sign } from 'jsonwebtoken';

export const generateToken = (user)=>{
    return jwt-sign(
        {id: user.id, email: user.email},
        process.env.JWT_SECRET,
        {expiresIn: "1h"}
    );    
}

export const verifyToken = (token) =>{
    return jwt.verify(token, process.env.JWT_SECRET);
}

/*
jwt.sign => Genera un token con la info del ususario
jwt.verify => Verifica si es valido
*/