import { Request, Response } from "express"
import { arrayProductos } from "../data"

export const getProductos = (req: Request, res: Response) => {
  res.json(arrayProductos)
}
