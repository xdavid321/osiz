const { Router } = require("express");
const cors = require("cors");
const helmet = require("helmet");
const bodyparser = require("body-parser");
const { validate } = require("express-validation");

const { joiOptions, validatorOptions } = require("./validators");
const { createOrderValidator } = require("./validators/order.validator");
const { generateOrder } = require("../payment/index");

const router = Router();

// Middlewares


// Functional routers
router.post("/", validate(createOrderValidator, validatorOptions, joiOptions), async (req, res) => {
    
    const {body} = req;

    generateOrder(body.amount, "INR")
        .then((order) => {
            res.status(200).json(order);
        });

});

module.exports = router;