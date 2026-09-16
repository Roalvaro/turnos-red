import swaggerJsdoc from "swagger-jsdoc"
import swaggerUi from "swagger-ui-express"
import { Express } from "express"

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Clínica",
      version: "1.0.0",
      description: "Documentación de la API de Turnos y Médicos"
    }
  },
  apis: ["./src/routes/*.ts"], // 👈 busca anotaciones en tus rutas
}

const swaggerSpec = swaggerJsdoc(options)

export const swaggerDocs = (app: Express, port: number) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))
  console.log(`📄 Swagger docs disponibles en http://localhost:${port}/api-docs`)
}
