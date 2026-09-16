"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (err, req, res, next) => {
    console.error(err);
    const status = err.status || 500;
    const message = err.message || "Internal Server Error";
    const code = err.code || "SERVER_ERROR";
    const details = err.details || [];
    res.status(status).json({
        status,
        message,
        code,
        details
    });
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=errorHandler.js.map