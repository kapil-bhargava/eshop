const mongoose = require('mongoose');
const cors = require('cors');
const express = require('express');

const app = express();

app.use(cors());
app.use(express.json());

const modelCategory = require("./models/categoryModel");

// connecting API to the MongoDB database //where myshopdatabase is the database name in MongoDB
const connection = mongoose.connect("mongodb://localhost:27017/myshopdatabase");
connection.then(() => {
    console.log("Connected to Database");
});
connection.catch(() => {
    console.log("Failed to Connect");
});

// =========== Category APIs ============

// POST category API
app.post("/category", async (req, res) => {
    const newCategory = new modelCategory({ categoryName: req.body.ctName });      // categoryName is from Schema (Model)  //ctName is wrapper to store category name in it from frontend
    await newCategory.save();
    res.json({ msg: "Category Added" });
});

// PUT category API 
app.put("/category", async (req, res) => {
    const updatedCategory = await modelCategory.findByIdAndUpdate({ _id: req.body.id }, { categoryName: req.body.ctName });      // categoryName is from Schema
    await updatedCategory.save();
    res.json({ msg: "Category Updated" });
});

// GET category API (All Records)
app.get("/category", async (req, res) => {
    const categories = await modelCategory.find();
    res.json(categories);
});

// GET category API (Particular Record)
app.get("/category/:id", async (req, res) => {
    const particularCategoryRecord = await modelCategory.find({ _id: req.body.id });
    res.json(particularCategoryRecord);
});

// DELETE category API
app.delete("/category/:id", async (req, res) => {
    await modelCategory.findOneAndDelete({ _id: req.body.id });
    res.json({ msg: "Category Deleted" });
});

// =========== Sub-category APIs ============



app.listen(7200, () => {
    console.log("Server Listening on");
});