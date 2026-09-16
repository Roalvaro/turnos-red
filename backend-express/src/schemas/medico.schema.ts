import { z } from "zod"

export const medicoSchema = z.object({
  id: z.string().min(1, "El ID es obligatorio"),
  nombre: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
  especialidad: z.string().min(3, "La especialidad es obligatoria"),
  disponible: z.boolean()
})
