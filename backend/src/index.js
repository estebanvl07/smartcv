import express from "express";
const app = express();

// Middleware para parsear JSON
app.use(express.json());

app.get("/", (req, res) => {
  res.send("¡Hola, Express!");
});
// Iniciar el servidor en el puerto 3000
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
