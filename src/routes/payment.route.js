const { Router } = require("express");

const Order = require("../database/models/order.model");

const router = Router();

// Middlewares


// Functional routers
router.post("/confirm", async (req, res) => {
    
    const {body} = req;

    await Order.updateOne({
        _id: body.razorpay_order_id
    }, {
        status: "paid",
        paymentId: body.razorpay_payment_id,
        sign: body.razorpay_signature
    })
    
    res.redirect(`${process.env.UI_BASEPATH}/success`);

});

module.exports = router;