"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategorias = void 0;
const data_1 = require("../data");
const getCategorias = (req, res) => {
    res.json(data_1.arrayCategorias);
};
exports.getCategorias = getCategorias;
//# sourceMappingURL=categorias.controller.js.map