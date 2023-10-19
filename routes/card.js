const router = require('express').Router();

const { celebrate, Joi } = require('celebrate');
const { getCards, createCard, likeCard, dislikeCard, deleteCard, isFavorite} = require('../controllers/foodCard');
const { urlRegExp } = require('../constants/constants');

router.get('/cards', getCards);
router.post('/create/card', celebrate({
    body: Joi.object().keys({
        link: Joi.string().required().pattern(urlRegExp),
        description: Joi.string().max(300),
    })
}), createCard);

// поставить лайк карточке
router.put('/cards/:id/like', celebrate({
    params: Joi.object().keys({
        id: Joi.string().length(24).hex().required(),
    }),
}), likeCard);
router.delete('/cards/:id/dislike',celebrate({
    params: Joi.object().keys({
        id: Joi.string().length(24).hex().required(),
    }),
  }), dislikeCard);
router.delete('/cards/:id',  celebrate({
    params: Joi.object().keys({
        id: Joi.string().length(24).hex().required(),
    }),
  }), deleteCard);
router.patch('/cards/:id',  celebrate({
    params: Joi.object().keys({
        id: Joi.string().length(24).hex().required(),
    }),
  }), isFavorite);

module.exports = router;
