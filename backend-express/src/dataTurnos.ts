export interface Turno {
  id: string
  paciente: string
  especialidad: string
  fecha: string
}

export const arrayTurnos: Turno[] = [
  { id: "1", paciente: "Juan Pérez", especialidad: "Pediatria", fecha: "14/09/2026" },
  { id: "2", paciente: "Ana Gómez", especialidad: "Odontologia", fecha: "15/09/2026" }
]
