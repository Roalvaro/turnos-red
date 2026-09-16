"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.turnoSchema = void 0;
const zod_1 = require("zod");
exports.turnoSchema = zod_1.z.object({
    id: zod_1.z.string().min(1, "El ID es obligatorio"),
    paciente: zod_1.z.string().min(3, "El nombre del paciente debe tener al menos 3 caracteres"),
    especialidad: zod_1.z.string().min(3, "La especialidad es obligatoria"),
    fecha: zod_1.z.string().regex(/^\d{2}\/\d{2}\/\d{4}$/, "La fecha debe tener formato DD/MM/YYYY")
});
//# sourceMappingURL=turno.schema.js.map