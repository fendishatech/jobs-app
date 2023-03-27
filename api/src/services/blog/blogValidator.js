const Joi = require("joi");

const schema = Joi.object({
  title: Joi.string().required(),
  cover_image: Joi.string().required(),
  content: Joi.string().required(),
});

const blogValidator = (req, res, next) => {
  try {
    const { body } = req;

    Joi.assert(body, schema);
    next();
  } catch (error) {
    res.status(400).json({
      success: false,
      type: error.name,
      detail: error.details[0].type,
      message: error.details[0].message,
    });
  }
};

module.exports = blogValidator;
