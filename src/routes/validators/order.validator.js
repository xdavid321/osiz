const { Joi, schema } = require("express-validation");

const { orderTypes, markets, scripType } = require("../../enum");

exports.createOrderValidator = {
    body: Joi.object({
        username: Joi.string().required(),
        amount: Joi.number().required(),
        stockId: Joi.string().required(),
        orderType: Joi.string().valid(...Object.values(orderTypes)).required(),
        scripType: Joi.string().valid(...Object.values(scripType)).required(),
        market: Joi.string().valid(...Object.values(markets)).required()
    }),
};
