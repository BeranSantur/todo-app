const express = require("express");
const {
  saveTodo,
  getTodos,
  getTodoById,
} = require("../controllers/todo-controller");

const router = express.Router();

router.get("/", getTodos);
router.get("/:id", getTodoById);
router.post("/", saveTodo);

module.exports = router;
