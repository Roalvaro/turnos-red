import { Request, Response } from "express"
import { arrayMedicos } from "../dataMedicos"
import { medicoSchema } from "../schemas/medico.schema"

export const createMedico = (req: Request, res: Response) => {
  try {
    const nuevoMedico = medicoSchema.parse(req.body)
    arrayMedicos.push(nuevoMedico)
    res.status(201).json(nuevoMedico)
  } catch (error: any) {
    res.status(400).json({
      message: "Error de validación",
      details: error.errors,
    })
  }
}

export const getMedicos = (_req: Request, res: Response) => {
  res.status(200).json(arrayMedicos)
}

export const getMedicoById = (req: Request, res: Response) => {
  const medico = arrayMedicos.find((m) => m.id === req.params.id)
  if (!medico) {
    return res.status(404).json({ message: "Médico no encontrado" })
  }
  res.status(200).json(medico)
}

export const updateMedico = (req: Request, res: Response) => {
  const medico = arrayMedicos.find((m) => m.id === req.params.id)
  if (!medico) {
    return res.status(404).json({ message: "Médico no encontrado" })
  }
  Object.assign(medico, req.body)
  res.status(200).json(medico)
}

export const deleteMedico = (req: Request, res: Response) => {
  const index = arrayMedicos.findIndex((m) => m.id === req.params.id)
  if (index === -1) {
    return res.status(404).json({ message: "Médico no encontrado" })
  }
  arrayMedicos.splice(index, 1)
  res.status(204).send()
}


