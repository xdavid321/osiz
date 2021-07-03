const { Schema, model } = require("mongoose");

const OrderSchema = new Schema({
    _id: String,
    username: {
        required: true,
        type: String
    },
    stockId: {
        required: true,
        type: String
    },
    stockName: {
        type: String,
        required: false,
        default: ""
    },
    quantity: {
        required: false,
        type: Number,
        default: 1
    },
    amount: {
        required: true,
        type: Number
    },
    currency: {
        required: true,
        type: String,
        default: "INR"
    },
    createdAt: {
        required: true,
        type: Number,
        default: parseInt((new Date().getTime()/1000).toFixed(0))
    },
    scripType: {
        required: false,
        type: String
    },
    orderType: {
        required: false,
        type: String
    },
    market: {
        required: false,
        type: String
    },
    status: String,
    paymentId: {
        required: false,
        type: String
    },
    sign: {
        required: false,
        type: String
    }
}, {
    timestamps: false,
    versionKey: false
});

module.exports = model('order', OrderSchema);