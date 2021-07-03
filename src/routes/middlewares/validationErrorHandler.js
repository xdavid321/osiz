const { ValidationError } = require("express-validation");

const validationErrorHandler = (err, req, res, next) => {
    if (err instanceof ValidationError) {
        const errResp = {
            code: "error/validation",
            message: Object.values((err.details)[0]),
        };
        return res.status(err.statusCode).json(errResp);
    } else {
        next();
    }
};

module.exports = validationErrorHandler;
