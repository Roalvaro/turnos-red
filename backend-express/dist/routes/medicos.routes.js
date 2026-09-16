"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const medicos_controller_1 = require("../controllers/medicos.controller");
const auth_1 = require("../middlewares/auth");
const validateSchema_1 = require("../middlewares/validateSchema");
const medico_schema_1 = require("../schemas/medico.schema");
const router = (0, express_1.Router)();
router.get("/", medicos_controller_1.getMedicos);
router.get("/:id", medicos_controller_1.getMedicoById);
router.post("/", auth_1.authenticateToken, (0, validateSchema_1.validateSchema)(medico_schema_1.medicoSchema), medicos_controller_1.createMedico);
router.put("/:id", auth_1.authenticateToken, (0, validateSchema_1.validateSchema)(medico_schema_1.medicoSchema), medicos_controller_1.updateMedico);
router.delete("/:id", auth_1.authenticateToken, medicos_controller_1.deleteMedico);
exports.default = router;
//# sourceMappingURL=medicos.routes.js.map