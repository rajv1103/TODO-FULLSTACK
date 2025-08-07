require('dotenv').config();
const express = require("express");
const userTodo = require("./todo"); // Import Todo Model
const { create, update } = require("./middleware"); // Import validation
require("./db"); // Ensure MongoDB is connected
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());


// ✅ Create a new Todo
app.post("/todo", async (req, res) => {
  const result = create.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({ error: result.error.errors });
  }

  try {
    const newTodo = await userTodo.create(req.body);
    res
      .status(201)
      .json({ message: "Todo created successfully", todo: newTodo });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error creating todo", details: error.message });
  }
});

// ✅ Get all Todos
app.get("/todo", async (req, res) => {
  try {
    const todos = await userTodo.find();
    res.json({ todos });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error fetching todos", details: error.message });
  }
});

// ✅ Mark a Todo as Completed
app.post("/completed", async (req, res) => {
  const result = update.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({ error: result.error.errors });
  }

  try {
    const updatedTodo = await userTodo.findOneAndUpdate(
      { _id: req.body.id }, // ✅ Correct filter format
      { done: true },
      { new: true }
    );

    if (!updatedTodo) {
      return res.status(404).json({ error: "Todo not found" });
    }

    res.json({ message: "Todo marked as completed", todo: updatedTodo });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error updating todo", details: error.message });
  }
});

// Start the Server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
