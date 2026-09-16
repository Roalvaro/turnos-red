"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productos_routes_1 = __importDefault(require("./routes/productos.routes"));
const categorias_routes_1 = __importDefault(require("./routes/categorias.routes"));
const turnos_routes_1 = __importDefault(require("./routes/turnos.routes"));
const medicos_routes_1 = __importDefault(require("./routes/medicos.routes"));
const errorHandler_1 = require("./middlewares/errorHandler");
const swagger_1 = require("./swagger");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
// Conectar rutas
app.use("/api/turnos", turnos_routes_1.default);
app.use("/api/productos", productos_routes_1.default);
app.use("/api/categorias", categorias_routes_1.default);
app.use("/api/medicos", medicos_routes_1.default);
app.use((error, _req, res, _next) => {
    if (error instanceof SyntaxError) {
        res.status(400).json({ error: "El cuerpo de la solicitud no contiene JSON válido" });
        return;
    }
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
});
app.use(errorHandler_1.errorHandler);
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    (0, swagger_1.swaggerDocs)(app, Number(PORT));
});
//# sourceMappingURL=server.js.map