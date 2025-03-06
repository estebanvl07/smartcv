import { registerUser } from "../services/authService";

export const onLogin = (req, res) => {};





export const onRegister = async(req, res) => {
    try {
        const { email, password } = req.body;
        if(!email || !password) {
            throw new Error('Email and password are required');
        }
       
        //verificar si el usuario ya existe
        const user = await registerUser(email, password);
        res.status(201).json({messaje: "User created", user: {id:user.id, email: user.email}});

    } catch (error) {
        res.status(400).json({ error: error.message });
    }   
};
