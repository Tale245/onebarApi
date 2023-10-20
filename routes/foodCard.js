const router = require('express').Router();

const { celebrate, Joi } = require('celebrate');
const {
  getCards,
  createCard,
  likeCard,
  dislikeCard,
  deleteCard,
  isFavorite,
} = require('../controllers/foodCard');
const { urlRegExp } = require('../constants/constants');

router.get('/cards', getCards);
router.post(
  '/create/card',
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required(),
      description: Joi.string().max(300),
      price: Joi.number().required(),
      ccal: Joi.number().required(),
      imageLink: Joi.string().required().pattern(urlRegExp),
    }),
  }),
  createCard
);

module.exports = router;
