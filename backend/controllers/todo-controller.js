const User = require("../models/Todo");
const { isTodoValid } = require("../validations/todo-validation");

const getTodos = async (req, res) => {
  const todos = await User.find();

  res.json(todos);
};

const getTodoById = async (req, res) => {
  const todo = await User.findById(req.params.id);

  res.json(todo);
};

const saveTodo = async (req, res) => {
  const newTodo = req.body;
  const { error } = isTodoValid(newTodo);
  if (error) {
    res.json(error.details[0].message);
  } else {
    const createdUser = await User.create(newTodo);
    res.json(createdUser);
  }
};

module.exports = { saveTodo, getTodos, getTodoById };
