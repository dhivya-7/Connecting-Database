const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    productname: { type: String, required: true },
    imgurl: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, default: 1 }
});
module.exports=mongoose.model("Products",productSchema);