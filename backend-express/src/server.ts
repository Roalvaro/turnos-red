import express from "express"
import productosRoutes from "./routes/productos.routes"
import categoriasRoutes from "./routes/categorias.routes"
import turnosRoutes from "./routes/turnos.routes"
import medicosRoutes from "./routes/medicos.routes"
import { errorHandler } from "./middlewares/errorHandler"
import { swaggerDocs } from "./swagger"

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

// Conectar rutas
app.use("/api/turnos", turnosRoutes)
app.use("/api/productos", productosRoutes)
app.use("/api/categorias", categoriasRoutes)
app.use("/api/medicos", medicosRoutes)

app.use((error: unknown, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  if (error instanceof SyntaxError) {
    res.status(400).json({ error: "El cuerpo de la solicitud no contiene JSON válido" })
    return
  }

  console.error(error)
  res.status(500).json({ error: "Error interno del servidor" })
})

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`)
  swaggerDocs(app, Number(PORT))
})

