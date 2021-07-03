const { Schema, model } = require("mongoose");

const StockSchema = new Schema({
    _id: String,
    name: String
}, {
    timestamps: false    
});

module.exports = model('stock', StockSchema);