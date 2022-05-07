const Joi = require("joi");

const addTodoSchema = Joi.object({
  task: Joi.string().required(),
  day: Joi.string().required(),
  priority: Joi.string().required(),
  done: Joi.string(),
});

const updateTodoSchema = Joi.object({
  _id: Joi.string(),
  task: Joi.string().required(),
  day: Joi.string().required(),
  priority: Joi.string().required(),
  done: Joi.string(),
});

const isUpdateTodoValid = (todo) => {
  return updateTodoSchema.validate(todo);
};

const isAddTodoValid = (todo) => {
  return addTodoSchema.validate(todo);
};

module.exports = { isAddTodoValid, isUpdateTodoValid };
