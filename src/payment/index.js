const RazorPay = require("razorpay");

const razorPay = new RazorPay({
    key_id: "rzp_test_m24mKEdbGMonLz",
    key_secret: "7xFHHJX6ULs9kGwWQlkpToiG"
});

/**
 * 
 * @param {Number} amount Amount in rupees
 * @param {String} currency Currency (defaults to "INR")
 * @param {String} receipt Optional receipt ID
 * @param {Object} notes Object with additional info
 * @returns {Promise<Order>}
 */
const generateOrder = async (amount, currency="INR", receipt="", notes={}) => {

    const amountInPaise = amount * 100;

    return razorPay.orders.create({
        amount: amountInPaise,
        currency,
        receipt,
        notes
    }).then((order) => {
        return order;
    });

};
exports.generateOrder = generateOrder;

/** @typedef {Object} Order
 * @property {Number} amount
 * @property {Number} amount_due
 * @property {Number} amount_paid
 * @property {Number} attempts
 * @property {Number} created_at
 * @property {String} currency
 * @property {String} entity
 * @property {String} id
 * @property {Array} notes
 * @property {String} receipt
 * @property {String} status
 */



