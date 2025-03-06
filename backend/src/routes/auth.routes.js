import { Router } from "express";
import { onLogin, onRegister } from "../controllers/auth.controller.js";
import passport from "passport";
const router = Router();

router.post("/auth/login", onLogin);
router.post("/auth/register", onRegister);

//inicio de autenticacion de sesion con google
router.get("/auth/google ", passport.authenticate("google", { scope: ["profile", "email"] }));

// Callback de google
router.get("/auth/google/callback",passport.authenticate("google", {failureRedirect: "/login" }),(req, res) => {
 
    // Successful authentication, redirect home.
    res.redirect("/");
    }
);
export default router;
