const Todo = require("../models/Todo");
const {
  isAddTodoValid,
  isUpdateTodoValid,
} = require("../validations/todo-validation");

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.json("And error occured", err);
    return;
  }
};

const getTodoById = async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  res.json(todo);
};

const saveTodo = async (req, res) => {
  const newTodo = req.body;
  const { error } = isAddTodoValid(newTodo);
  if (error) {
    res.json(error.details[0].message);
  } else {
    if (!newTodo.done) {
      newTodo.done = "no";
    }
    const createdUser = await Todo.create(newTodo);
    res.json(createdUser);
  }
};

const updateTodo = async (req, res) => {
  const todo = req.body;
  const { error } = isUpdateTodoValid(todo);
  if (error) {
    res.json(error.details[0].message);
  } else {
    try {
      const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, todo);
      res.json(updatedTodo);
    } catch (error) {
      res.status(400).json("There were an error ", error);
    }
  }
};

const deleteTodo = async (req, res) => {
  try {
    const deletedTodo = await Todo.deleteOne({ id: req.params.id });
    res.json(deletedTodo);
  } catch (error) {
    res.status(400).json("There was an error ", error);
  }
};

module.exports = { saveTodo, getTodos, getTodoById, updateTodo, deleteTodo };
