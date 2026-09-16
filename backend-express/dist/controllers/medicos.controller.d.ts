import { Request, Response } from "express";
export declare const createMedico: (req: Request, res: Response) => void;
export declare const getMedicos: (_req: Request, res: Response) => void;
export declare const getMedicoById: (req: Request, res: Response) => Response<any, Record<string, any>> | undefined;
export declare const updateMedico: (req: Request, res: Response) => Response<any, Record<string, any>> | undefined;
export declare const deleteMedico: (req: Request, res: Response) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=medicos.controller.d.ts.map