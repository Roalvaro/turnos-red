const turnos = [];
const isTurnoInput = (body) => {
    if (typeof body !== "object" || body === null)
        return false;
    const turno = body;
    return ["fecha", "hora", "cliente", "servicio", "estado"].every((field) => {
        const value = turno[field];
        return typeof value === "string" && value.trim().length > 0;
    });
};
const findTurno = (id) => turnos.find((turno) => turno.id === id);
const getId = (req, res) => {
    const id = req.params.id;
    if (typeof id !== "string" || id.length === 0) {
        res.status(400).json({ error: "El identificador del turno no es válido" });
        return null;
    }
    return id;
};
export const getTurnos = (_req, res) => {
    res.status(200).json(turnos);
};
export const getTurno = (req, res) => {
    const id = getId(req, res);
    if (!id)
        return;
    const turno = findTurno(id);
    if (!turno) {
        res.status(404).json({ error: "Turno no encontrado" });
        return;
    }
    res.status(200).json(turno);
};
export const createTurno = (req, res) => {
    if (!isTurnoInput(req.body)) {
        res.status(400).json({ error: "El turno requiere fecha, hora, cliente, servicio y estado" });
        return;
    }
    const turno = { id: crypto.randomUUID(), ...req.body };
    turnos.push(turno);
    res.status(201).json(turno);
};
export const updateTurno = (req, res) => {
    const id = getId(req, res);
    if (!id)
        return;
    const index = turnos.findIndex((turno) => turno.id === id);
    if (index === -1) {
        res.status(404).json({ error: "Turno no encontrado" });
        return;
    }
    if (!isTurnoInput(req.body)) {
        res.status(400).json({ error: "El turno requiere fecha, hora, cliente, servicio y estado" });
        return;
    }
    const turno = { id, ...req.body };
    turnos[index] = turno;
    res.status(200).json(turno);
};
export const deleteTurno = (req, res) => {
    const id = getId(req, res);
    if (!id)
        return;
    const index = turnos.findIndex((turno) => turno.id === id);
    if (index === -1) {
        res.status(404).json({ error: "Turno no encontrado" });
        return;
    }
    turnos.splice(index, 1);
    res.status(204).send();
};
//# sourceMappingURL=turnos.controller.js.map