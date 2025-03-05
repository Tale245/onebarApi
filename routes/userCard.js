const router = require('express').Router();

const { celebrate, Joi } = require('celebrate');
const {
  deleteUserCard,
  createUserCard,
  isFavoriteUserCard,
  likeUserCard,
} = require('../controllers/userFoods');

const { urlRegExp } = require('../constants/constants');

// Удалить карточку в пользователе
router.delete(
  '/user/cards/:index',
  celebrate({
    params: Joi.object().keys({
      index: Joi.string().required(),
    }),
  }),
  deleteUserCard
);
// Добавить карточку в пользователе в избранное
router.patch(
  '/user/cards/:id',
  celebrate({
    params: Joi.object().keys({
      id: Joi.string().required(),
    }),
  }),
  isFavoriteUserCard
);
// Поставить лайк карточке в пользователе
router.put(
  '/users/:ownerID/cards/:id/like',
  celebrate({
    params: Joi.object().keys({
      id: Joi.string().required(),
      ownerID: Joi.string().required(),
    }),
  }),
  likeUserCard
);
// Создать карточку в пользователе
router.post(
  '/user/cards',
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required(),
      description: Joi.string().max(300),
      price: Joi.number().required(),
      gram: Joi.number().required(),
      imageLink: Joi.string().required(),
      category: Joi.string().required()
    }),
  }),
  createUserCard
);
module.exports = router;
