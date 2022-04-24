const Joi = require("joi");

const schema = Joi.object({
  task: Joi.string().required(),
  day: Joi.string().required(),
  priority: Joi.string().required(),
  done: Joi.string().required(),
});

const isTodoValid = (todo) => {
  return schema.validate(todo);
};

module.exports = { isTodoValid };
