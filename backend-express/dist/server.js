import express from "express";
import productosRoutes from "./routes/productos.routes.js";
import categoriasRoutes from "./routes/categorias.routes.js";
import turnosRoutes from "./routes/turnos.routes.js";
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
// Conectar rutas
app.use("/api/productos", productosRoutes);
app.use("/api/categorias", categoriasRoutes);
app.use("/api/turnos", turnosRoutes);
app.use((error, _req, res, _next) => {
    if (error instanceof SyntaxError) {
        res.status(400).json({ error: "El cuerpo de la solicitud no contiene JSON válido" });
        return;
    }
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
});
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map