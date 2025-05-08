const router = require('express').Router();

const {
  getCards,
  createFoodMenu,
  changeValue,
  addElementInMenuArray,
  deleteElementsInMenuArray,
} = require('../controllers/foodCard');
const { clearCart } = require('../controllers/userFoods');

router.get('/foodMenu', getCards);

router.delete('/clearCart', clearCart);
// Создаем меню
router.post('/createFoodMenu', createFoodMenu);


// Добавляем еду в меню
router.put('/addElementInFoodMenuArray', addElementInMenuArray);

// Добавляем еды из меню
router.delete('/deleteElementInFoodMenu', deleteElementsInMenuArray);


// Изменение поля объекта массива
router.put('/changeValueMenu', changeValue);

module.exports = router;

