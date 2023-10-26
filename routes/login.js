const router = require('express').Router();

const { createUser, login } = require('../controllers/user');

const { celebrate, Joi } = require('celebrate');

router.post('/signin', celebrate({
    body: Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().min(8).required(),
      codeWord: Joi.string().min(3).required(),
    }),
  }), login);
router.post('/signup', celebrate({
    body: Joi.object().keys({
      name: Joi.string().min(1).max(30).required(),
      admin: Joi.boolean().required(),
      waiter: Joi.boolean().required(),
      email: Joi.string().required().email(),
      password: Joi.string().min(8).required(),
      codeWord: Joi.string().min(3).required(),
    }),
  }), createUser);

module.exports = router;
