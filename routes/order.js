const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const { createOrder, getOrders, addElementInArray, deleteElementInArray } = require('../controllers/orders');


router.post(
  '/createOrder',
  celebrate({
    body: Joi.object().keys({
      nameWhoOrders: Joi.string().min(1).max(30).required(),
      foods: Joi.array().required(),
      price: Joi.number().required(),
    }),
  }),
  createOrder
);
router.get('/orders', getOrders);
router.put('/addElementInArray', addElementInArray);
router.delete('/deleteElementInArray', deleteElementInArray);



module.exports = router;
