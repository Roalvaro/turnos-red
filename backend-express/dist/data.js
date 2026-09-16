"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayCategorias = exports.arrayProductos = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
// Rutas absolutas
const productosPath = path_1.default.resolve(process.cwd(), "data", "productos.json");
const categoriasPath = path_1.default.resolve(process.cwd(), "data", "categorias.json");
// Lectura de archivos
exports.arrayProductos = JSON.parse(fs_1.default.readFileSync(productosPath, "utf8"));
exports.arrayCategorias = JSON.parse(fs_1.default.readFileSync(categoriasPath, "utf8"));
// Debug
// console.log("Productos cargados:", arrayProductos.length)
// console.log("Categorías cargadas:", arrayCategorias.length)
//# sourceMappingURL=data.js.map