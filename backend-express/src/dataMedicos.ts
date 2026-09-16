export interface Medico {
  id: string
  nombre: string
  especialidad: string
  disponible: boolean
}

export const arrayMedicos: Medico[] = [
  { id: "1", nombre: "Dr. López", especialidad: "Pediatria", disponible: true },
  { id: "2", nombre: "Dra. Martínez", especialidad: "Odontologia", disponible: false }
]
