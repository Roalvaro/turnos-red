"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const SECRET_KEY = "mi_clave_secreta";
// Usuario de prueba
const user = {
    username: "admin",
    password: bcryptjs_1.default.hashSync("1234", 10) // contraseña encriptada
};
const login = (req, res) => {
    const { username, password } = req.body;
    if (username !== user.username || !bcryptjs_1.default.compareSync(password, user.password)) {
        return res.status(401).json({ message: "Credenciales inválidas" });
    }
    const token = jsonwebtoken_1.default.sign({ username: user.username }, SECRET_KEY, { expiresIn: "1h" });
    res.json({ token });
};
exports.login = login;
//# sourceMappingURL=auth.controller.js.map