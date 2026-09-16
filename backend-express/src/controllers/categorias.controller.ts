import { Request, Response } from "express"
import { arrayCategorias } from "../data"

export const getCategorias = (req: Request, res: Response) => {
  res.json(arrayCategorias)
}
