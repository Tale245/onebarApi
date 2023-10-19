const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const { createOrder, getOrders } = require('../controllers/orders');

router.post(
  '/createOrder',
  celebrate({
    body: Joi.object().keys({
      nameWhoOrders: Joi.string().min(1).max(30).required(),
      foods: Joi.array().required(),
    }),
  }),
  createOrder
);
router.get('/orders', getOrders);
module.exports = router;
