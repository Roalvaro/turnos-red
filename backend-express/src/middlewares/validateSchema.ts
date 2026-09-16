import { Request, Response, NextFunction } from "express"
import { ZodSchema } from "zod"

export const validateSchema = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body) // valida el body con el schema
      next() // si pasa la validación, sigue al controlador
    } catch (error: any) {
      res.status(400).json({
        message: "Error de validación",
        details: error.errors
      })
    }
  }
}
