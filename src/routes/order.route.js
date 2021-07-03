const { Router } = require("express");
const { validate } = require("express-validation");

const { joiOptions, validatorOptions } = require("./validators");
const { createOrderValidator } = require("./validators/order.validator");
const { generateOrder } = require("../payment/index");
const Order = require("../database/models/order.model");

const router = Router();

// Middlewares


// Functional routers
router.post("/", validate(createOrderValidator, validatorOptions, joiOptions), async (req, res) => {
    
    const {body} = req;

    const order = await generateOrder(body.amount, "INR");

    await Order.create({
        _id: order.id,
        username: body.username,
        stockId: body.stockId,
        amount: body.amount,
        createdAt: order.created_at,
        scriptType: body.scriptType,
        orderType: body.orderType,
        market: body.market,
        status: order.status
    });

    res.status(200).json(order);

});

module.exports = router;