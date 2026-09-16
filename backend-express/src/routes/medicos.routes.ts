import { Router } from "express"
import { getMedicos, getMedicoById, createMedico, updateMedico, deleteMedico } from "../controllers/medicos.controller"
import { validateSchema } from "../middlewares/validateSchema"
import { medicoSchema } from "../schemas/medico.schema"

const router = Router()

router.get("/", getMedicos)
router.get("/:id", getMedicoById)
router.post("/", validateSchema(medicoSchema), createMedico) // 👈 validación antes del controlador
router.put("/:id", validateSchema(medicoSchema), updateMedico)
router.delete("/:id", deleteMedico)

export default router
import { authenticateToken } from "../middlewares/auth"

router.post("/", authenticateToken, validateSchema(medicoSchema), createMedico)
router.put("/:id", authenticateToken, validateSchema(medicoSchema), updateMedico)
router.delete("/:id", authenticateToken, deleteMedico)

/**
 * @swagger
 * /api/medicos:
 *   get:
 *     summary: Obtiene todos los médicos
 *     responses:
 *       200:
 *         description: Lista de médicos
 */
router.get("/", getMedicos)

/**
 * @swagger
 * /api/medicos/{id}:
 *   get:
 *     summary: Obtiene un médico por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Médico encontrado
 *       404:
 *         description: Médico no encontrado
 */
router.get("/:id", getMedicoById)