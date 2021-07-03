const { Router } = require("express");
const cors = require("cors");
const helmet = require("helmet");
const bodyparser = require("body-parser");

const orderRouter = require("./order.route");
const paymentRouter = require("./payment.route");

const validationErrorHandler = require("./middlewares/validationErrorHandler");

const router = Router();

// Middlewares
router.use(cors());
router.use(bodyparser.json());
router.use(bodyparser.urlencoded({extended: true}))
router.use(helmet());

// Functional routers
router.use("/order", orderRouter);
router.use("/payment", paymentRouter);

// Middlerwares
router.use(validationErrorHandler);

module.exports = router;