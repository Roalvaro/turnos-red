import { z } from "zod"

export const turnoSchema = z.object({
  id: z.string().min(1, "El ID es obligatorio"),
  paciente: z.string().min(3, "El nombre del paciente debe tener al menos 3 caracteres"),
  especialidad: z.string().min(3, "La especialidad es obligatoria"),
  fecha: z.string().regex(/^\d{2}\/\d{2}\/\d{4}$/, "La fecha debe tener formato DD/MM/YYYY")
})
