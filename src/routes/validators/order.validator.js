const { Joi, schema } = require("express-validation");

const { orderTypes, markets } = require("../../enum");

exports.createOrderValidator = {
    body: Joi.object({
        userId: Joi.string().required(),
        amount: Joi.number().required(),
        stockId: Joi.string().required(),
        type: Joi.string().valid(...Object.values(orderTypes)).required(),
        market: Joi.string().valid(...Object.values(markets)).required()
    }),
};
