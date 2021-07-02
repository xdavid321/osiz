const { Router } = require("express");
const cors = require("cors");
const helmet = require("helmet");
const bodyparser = require("body-parser");

const router = Router();

// Attaching middlewares
router.use(cors());
router.use(bodyparser.json());
router.use(helmet());

exports.default = router;