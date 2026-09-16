import { Request, Response } from "express"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

const SECRET_KEY = "mi_clave_secreta"

// Usuario de prueba
const user = {
  username: "admin",
  password: bcrypt.hashSync("1234", 10) // contraseña encriptada
}

export const login = (req: Request, res: Response) => {
  const { username, password } = req.body

  if (username !== user.username || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: "Credenciales inválidas" })
  }

  const token = jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: "1h" })
  res.json({ token })
}
