import { Router } from "express";
import { createTurno, deleteTurno, getTurno, getTurnos, updateTurno, } from "../controllers/turnos.controller.js";
const router = Router();
router.get("/", getTurnos);
router.get("/:id", getTurno);
router.post("/", createTurno);
router.put("/:id", updateTurno);
router.delete("/:id", deleteTurno);
export default router;
//# sourceMappingURL=turnos.routes.js.map