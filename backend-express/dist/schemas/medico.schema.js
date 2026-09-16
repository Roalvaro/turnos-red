"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.medicoSchema = void 0;
const zod_1 = require("zod");
exports.medicoSchema = zod_1.z.object({
    id: zod_1.z.string().min(1, "El ID es obligatorio"),
    nombre: zod_1.z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
    especialidad: zod_1.z.string().min(3, "La especialidad es obligatoria"),
    disponible: zod_1.z.boolean()
});
//# sourceMappingURL=medico.schema.js.map