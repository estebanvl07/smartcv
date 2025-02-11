import { Router } from "express";
import { onLogin, onRegister } from "../controllers/auth.controller.js";

const router = Router();

router.post("/auth/login", onLogin);
router.post("/auth/register", onRegister);

export default router;
