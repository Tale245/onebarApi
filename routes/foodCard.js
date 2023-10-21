const router = require('express').Router();

const { celebrate, Joi } = require('celebrate');
const {
  getCards,
  createCard,
  likeCard,
  dislikeCard,
  deleteCard,
  isFavorite,
  createFoodMenu,
  addSnacksInArray,
  addColdSnacksInArray,
  addSoupsInArray,
  addSaladsInArray,
  addPastesInArray,
  addBeerSnackInArray,
  addHotDishesInArray,
  addPizzaInArray,
} = require('../controllers/foodCard');
const { urlRegExp } = require('../constants/constants');
const { clearCart } = require('../controllers/userFoods');

router.get('/foodMenu', getCards);
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

router.delete('/clearCart', clearCart);
// Создаем меню
router.post('/createFoodMenu', createFoodMenu);
// Добавляем холодные закуски в меню
router.put('/addColdSnacksInMenu', addColdSnacksInArray);
// Добавляем супы в меню
router.put('/addSoupsInMenu', addSoupsInArray);
// Добавляем холодные закуски в меню
router.put('/addSnacksInMenu', addSnacksInArray);
// Добавляем салаты в меню
router.put('/addSaladsInMenu', addSaladsInArray);
// Добавляем паст закуски в меню
router.put('/addPastesInMenu', addPastesInArray);
// Добавляем закуски к пиву в меню
router.put('/addBeerSnackInMenu', addBeerSnackInArray);
// Добавляем горячие блюда в меню
router.put('/addHotDishesInMenu', addHotDishesInArray);
// Добавляем пиццу в меню
router.put('/addPizzaInMenu', addPizzaInArray);

module.exports = router;
