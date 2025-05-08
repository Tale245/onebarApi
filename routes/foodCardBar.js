const router = require('express').Router();

const {
  getCards,
  createFoodMenuBar,
  changeValue,
  addElementInBarMenuArray,
  deleteElementsInBarMenuArray,
} = require('../controllers/foodCardBar');

router.get('/foodMenuBar', getCards);
// Создаем меню
router.post('/createFoodMenuBar', createFoodMenuBar);
// Добавляем элементы в барное меню
router.put('/addElementInBarMenuArray', addElementInBarMenuArray);
// Добавляем элементы в барное меню
router.delete('/deleteElementInBarMenu', deleteElementsInBarMenuArray);
//Меняем значение поля объекта массива
router.put('/changeValueBarMenu', changeValue);

module.exports = router;
