"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSchema = void 0;
const validateSchema = (schema) => {
    return (req, res, next) => {
        try {
            schema.parse(req.body); // valida el body con el schema
            next(); // si pasa la validación, sigue al controlador
        }
        catch (error) {
            res.status(400).json({
                message: "Error de validación",
                details: error.errors
            });
        }
    };
};
exports.validateSchema = validateSchema;
//# sourceMappingURL=validateSchema.js.map