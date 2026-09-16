import { Router } from "express"
import { getMedicos, getMedicoById, createMedico, updateMedico, deleteMedico } from "../controllers/medicos.controller"
import { authenticateToken } from "../middlewares/auth"
import { validateSchema } from "../middlewares/validateSchema"
import { medicoSchema } from "../schemas/medico.schema"

const router = Router()

router.get("/", getMedicos)
router.get("/:id", getMedicoById)
router.post("/", authenticateToken, validateSchema(medicoSchema), createMedico)
router.put("/:id", authenticateToken, validateSchema(medicoSchema), updateMedico)
router.delete("/:id", authenticateToken, deleteMedico)

export default router