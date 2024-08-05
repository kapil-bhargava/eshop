const mongoose = require('mongoose');

const categoryModel = mongoose.model("Category", new mongoose.Schema({
    categoryName:{type:String, require:true}
}));

module.exports = categoryModel;