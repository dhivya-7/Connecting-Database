const mongoose = require("mongoose");
const axios = require("axios");
const Product = require("./schema"); // ✅ FIXED

async function storeProducts() {
    try {
        const response = await axios.get("https://fakestoreapi.com/products?limit=20");
        const selectedProducts = response.data.slice(10, 20); // get products 11 to 20

        const formatted = selectedProducts.map(p => ({
            productname: p.title,
            imgurl: p.image,
            price: p.price,
            quantity: Math.floor(Math.random() * 10 + 1)
        }));

        await Product.insertMany(formatted);
        console.log("Products inserted successfully!");
        mongoose.disconnect();
    } catch (error) {
        console.error("Error inserting products:", error.message);
    }
}

storeProducts();
