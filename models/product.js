const { Schema, model } = require("mongoose");

const productSchema = Schema({
  name: String,
  price: Number,
  price: Number,
});
// схема для модели
const Product = model("product", productSchema);
module.exports = Product;
// 1й аргумент название коллекции в единственном числе 2й схема
