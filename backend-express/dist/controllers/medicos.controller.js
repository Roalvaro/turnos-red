"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMedico = exports.updateMedico = exports.getMedicoById = exports.getMedicos = exports.createMedico = void 0;
const dataMedicos_1 = require("../dataMedicos");
const medico_schema_1 = require("../schemas/medico.schema");
const createMedico = (req, res) => {
    try {
        const nuevoMedico = medico_schema_1.medicoSchema.parse(req.body);
        dataMedicos_1.arrayMedicos.push(nuevoMedico);
        res.status(201).json(nuevoMedico);
    }
    catch (error) {
        res.status(400).json({
            message: "Error de validación",
            details: error.errors,
        });
    }
};
exports.createMedico = createMedico;
const getMedicos = (_req, res) => {
    res.status(200).json(dataMedicos_1.arrayMedicos);
};
exports.getMedicos = getMedicos;
const getMedicoById = (req, res) => {
    const medico = dataMedicos_1.arrayMedicos.find((m) => m.id === req.params.id);
    if (!medico) {
        return res.status(404).json({ message: "Médico no encontrado" });
    }
    res.status(200).json(medico);
};
exports.getMedicoById = getMedicoById;
const updateMedico = (req, res) => {
    const medico = dataMedicos_1.arrayMedicos.find((m) => m.id === req.params.id);
    if (!medico) {
        return res.status(404).json({ message: "Médico no encontrado" });
    }
    Object.assign(medico, req.body);
    res.status(200).json(medico);
};
exports.updateMedico = updateMedico;
const deleteMedico = (req, res) => {
    const index = dataMedicos_1.arrayMedicos.findIndex((m) => m.id === req.params.id);
    if (index === -1) {
        return res.status(404).json({ message: "Médico no encontrado" });
    }
    dataMedicos_1.arrayMedicos.splice(index, 1);
    res.status(204).send();
};
exports.deleteMedico = deleteMedico;
//# sourceMappingURL=medicos.controller.js.map