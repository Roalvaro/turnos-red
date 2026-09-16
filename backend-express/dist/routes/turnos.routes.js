"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const turnos_controller_1 = require("../controllers/turnos.controller");
const validateSchema_1 = require("../middlewares/validateSchema");
const turno_schema_1 = require("../schemas/turno.schema");
const router = (0, express_1.Router)();
router.get("/", turnos_controller_1.getTurnos);
router.get("/:id", turnos_controller_1.getTurnoById);
router.post("/", (0, validateSchema_1.validateSchema)(turno_schema_1.turnoSchema), turnos_controller_1.createTurno);
router.put("/:id", (0, validateSchema_1.validateSchema)(turno_schema_1.turnoSchema), turnos_controller_1.updateTurno);
router.delete("/:id", turnos_controller_1.deleteTurno);
exports.default = router;
//# sourceMappingURL=turnos.routes.js.map