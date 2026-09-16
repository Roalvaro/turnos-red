import { Router } from "express"
import { getTurnos, getTurnoById, createTurno, updateTurno, deleteTurno } from "../controllers/turnos.controller"
import { validateSchema } from "../middlewares/validateSchema"
import { turnoSchema } from "../schemas/turno.schema"

const router = Router()

router.get("/", getTurnos)
router.get("/:id", getTurnoById)
router.post("/", validateSchema(turnoSchema), createTurno)
router.put("/:id", validateSchema(turnoSchema), updateTurno)
router.delete("/:id", deleteTurno)

export default router
