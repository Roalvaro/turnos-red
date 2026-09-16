"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTurno = exports.updateTurno = exports.getTurnoById = exports.getTurnos = exports.createTurno = void 0;
const dataTurnos_1 = require("../dataTurnos");
const turno_schema_1 = require("../schemas/turno.schema");
const createTurno = (req, res) => {
    try {
        const nuevoTurno = turno_schema_1.turnoSchema.parse(req.body);
        dataTurnos_1.arrayTurnos.push(nuevoTurno);
        res.status(201).json(nuevoTurno);
    }
    catch (error) {
        res.status(400).json({
            message: "Error de validación",
            details: error.errors,
        });
    }
};
exports.createTurno = createTurno;
const getTurnos = (_req, res) => {
    res.status(200).json(dataTurnos_1.arrayTurnos);
};
exports.getTurnos = getTurnos;
const getTurnoById = (req, res) => {
    const turno = dataTurnos_1.arrayTurnos.find((t) => t.id === req.params.id);
    if (!turno) {
        return res.status(404).json({ message: "Turno no encontrado" });
    }
    res.status(200).json(turno);
};
exports.getTurnoById = getTurnoById;
const updateTurno = (req, res) => {
    const turno = dataTurnos_1.arrayTurnos.find((t) => t.id === req.params.id);
    if (!turno) {
        return res.status(404).json({ message: "Turno no encontrado" });
    }
    Object.assign(turno, req.body);
    res.status(200).json(turno);
};
exports.updateTurno = updateTurno;
const deleteTurno = (req, res) => {
    const index = dataTurnos_1.arrayTurnos.findIndex((t) => t.id === req.params.id);
    if (index === -1) {
        return res.status(404).json({ message: "Turno no encontrado" });
    }
    dataTurnos_1.arrayTurnos.splice(index, 1);
    res.status(204).send();
};
exports.deleteTurno = deleteTurno;
//# sourceMappingURL=turnos.controller.js.map