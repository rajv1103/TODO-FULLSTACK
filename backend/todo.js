const mongoose = require("./db");

const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  done: { type: Boolean, required: true },
});

const userTodo = mongoose.model("userTodo", todoSchema);

module.exports = userTodo;
