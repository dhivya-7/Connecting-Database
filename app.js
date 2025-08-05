const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/schema");// ✅ FIXED
const app = express();
app.use(express.json()); // Middleware to parse JSON

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/productsdb")

// Add a new product
app.post("/products", async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json({ message: "Product added", product });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get all products
app.get("/products", async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Start server 
app.listen(9000, () => {
    console.log("Server is running...");
});