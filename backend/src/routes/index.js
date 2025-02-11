import { Router } from "express";
import userRoutes from "./users.routes.js";

// import authRoutes from "./auth.routes";

const router = Router();

// router.use("/auth", authRoutes);
router.use("/users", userRoutes);

export default router;
