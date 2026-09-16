import { Request, Response } from "express";
export interface Turno {
    id: string;
    fecha: string;
    hora: string;
    cliente: string;
    servicio: string;
    estado: string;
}
export declare const getTurnos: (_req: Request, res: Response) => void;
export declare const getTurno: (req: Request, res: Response) => void;
export declare const createTurno: (req: Request, res: Response) => void;
export declare const updateTurno: (req: Request, res: Response) => void;
export declare const deleteTurno: (req: Request, res: Response) => void;
//# sourceMappingURL=turnos.controller.d.ts.map