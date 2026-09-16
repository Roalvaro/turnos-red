import { Request, Response } from "express";
export declare const createTurno: (req: Request, res: Response) => void;
export declare const getTurnos: (_req: Request, res: Response) => void;
export declare const getTurnoById: (req: Request, res: Response) => Response<any, Record<string, any>> | undefined;
export declare const updateTurno: (req: Request, res: Response) => Response<any, Record<string, any>> | undefined;
export declare const deleteTurno: (req: Request, res: Response) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=turnos.controller.d.ts.map