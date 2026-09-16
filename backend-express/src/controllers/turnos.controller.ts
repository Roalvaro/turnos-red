import { Request, Response } from "express"
import { arrayTurnos } from "../dataTurnos"
import { turnoSchema } from "../schemas/turno.schema"

export const createTurno = (req: Request, res: Response) => {
  try {
    const nuevoTurno = turnoSchema.parse(req.body)
    arrayTurnos.push(nuevoTurno)
    res.status(201).json(nuevoTurno)
  } catch (error: any) {
    res.status(400).json({
      message: "Error de validación",
      details: error.errors,
    })
  }
}

export const getTurnos = (_req: Request, res: Response) => {
  res.status(200).json(arrayTurnos)
}

export const getTurnoById = (req: Request, res: Response) => {
  const turno = arrayTurnos.find((t) => t.id === req.params.id)
  if (!turno) {
    return res.status(404).json({ message: "Turno no encontrado" })
  }
  res.status(200).json(turno)
}

export const updateTurno = (req: Request, res: Response) => {
  const turno = arrayTurnos.find((t) => t.id === req.params.id)
  if (!turno) {
    return res.status(404).json({ message: "Turno no encontrado" })
  }
  Object.assign(turno, req.body)
  res.status(200).json(turno)
}

export const deleteTurno = (req: Request, res: Response) => {
  const index = arrayTurnos.findIndex((t) => t.id === req.params.id)
  if (index === -1) {
    return res.status(404).json({ message: "Turno no encontrado" })
  }
  arrayTurnos.splice(index, 1)
  res.status(204).send()
}
