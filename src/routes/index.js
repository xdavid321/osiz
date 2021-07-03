const { Router } = require("express");
const cors = require("cors");
const helmet = require("helmet");
const bodyparser = require("body-parser");

const orderRouter = require("./order.route");

const router = Router();

// Attaching middlewares
router.use(cors());
router.use(bodyparser.json());
router.use(helmet());

// Functional routers
router.use("/order", orderRouter);

module.exports = router;