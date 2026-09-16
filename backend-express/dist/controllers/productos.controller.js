"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductos = void 0;
const data_1 = require("../data");
const getProductos = (req, res) => {
    res.json(data_1.arrayProductos);
};
exports.getProductos = getProductos;
//# sourceMappingURL=productos.controller.js.map