import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";
export declare const validateSchema: (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => void;
//# sourceMappingURL=validateSchema.d.ts.map