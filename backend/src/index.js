import express from "express";
import cors from "cors";
import { PORT, FRONT_URL } from "./constants/config.js";
import routes from "./routes/index.js";

const app = express();

const corsOptions = {
  // TODO: Use only env
  origin: ["http://localhost:4321", "http://127.0.0.1:5173", FRONT_URL],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Middleware para parsear JSON
app.use(express.json());

app.use("/", routes);
// Iniciar el servidor en el puerto 3000

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
