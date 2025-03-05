const router = require('express').Router();

const { celebrate, Joi } = require('celebrate');
const {
  getCards,
  addCigarettesInArray,
  addJuiceInArray,
  addCoffeeInArray,
  addTeaInArray,
  addBottledBeerInArray,
  addWineInArray,
  addChampagneInArray,
  addVermouthInArray,
  addAperativesInArray,
  addRumInArray,
  addCognacInArray,
  addBrandyInArray,
  addWhiskeyInArray,
  addGinInArray,
  addTequilaInArray,
  addTincturesInArray,
  addVodkaInArray,
  addLiqueursInArray,
  deleteCigarettesInArray,
  deleteJuiceInArray,
  deleteCoffeeInArray,
  deleteTeaInArray,
  deleteBottledBeerInArray,
  deleteWineInArray,
  deleteChampagneInArray,
  deleteVermouthInArray,
  deleteAperativesInArray,
  deleteRumInArray,
  deleteCognachInArray,
  deleteBrandyInArray,
  deleteWhiskeyInArray,
  deleteGinInArray,
  deleteTequilaInArray,
  deleteTincturesInArray,
  deleteVodkaInArray,
  deleteLiqueursInArray,
  createFoodMenuBar,
  addHookahsInArray,
  deleteHookahsInArray,
  addCocktailsInArray,
  addShotsInArray,
  deleteCocktailsInArray,
  deleteShotsInArray,
  changeValue,
  updateAll,
} = require('../controllers/foodCardBar');

router.get('/foodMenuBar', getCards);
// Создаем меню
router.post('/createFoodMenuBar', createFoodMenuBar);
// Добавляем холодные закуски в меню
router.put('/addCigarettesInMenu', addCigarettesInArray);
// Добавляем холодные закуски в меню
router.put('/addHookahsInMenu', addHookahsInArray);
// Добавляем супы в меню
router.put('/addJuiceInMenu', addJuiceInArray);
// Добавляем холодные закуски в меню
router.put('/addCoffeeInMenu', addCoffeeInArray);
// Добавляем салаты в меню
router.put('/addTeaInMenu', addTeaInArray);
// Добавляем паст закуски в меню
router.put('/addBottledBeerInMenu', addBottledBeerInArray);
// Добавляем закуски к пиву в меню
router.put('/addWineInMenu', addWineInArray);
// Добавляем горячие блюда в меню
router.put('/addChampagneInMenu', addChampagneInArray);
// Добавляем пиццу в меню
router.put('/addVermouthInMenu', addVermouthInArray);
// Добавляем пиццу в меню
router.put('/addAperativesInMenu', addAperativesInArray);
// Добавляем пиццу в меню
router.put('/addRumInMenu', addRumInArray);
// Добавляем пиццу в меню
router.put('/addCognacInMenu', addCognacInArray);
// Добавляем пиццу в меню
router.put('/addBrandyInMenu', addBrandyInArray);
// Добавляем пиццу в меню
router.put('/addWhiskeyInMenu', addWhiskeyInArray);
// Добавляем пиццу в меню
router.put('/addGinInMenu', addGinInArray);
// Добавляем пиццу в меню
router.put('/addTequilaInMenu', addTequilaInArray);
// Добавляем пиццу в меню
router.put('/addTincturesInMenu', addTincturesInArray);
// Добавляем пиццу в меню
router.put('/addVodkaInMenu', addVodkaInArray);
// Добавляем пиццу в меню
router.put('/addLiqueursInMenu', addLiqueursInArray);
router.put('/addCocktailsInMenu', addCocktailsInArray);
router.put('/addShotsInMenu', addShotsInArray);

// Добавляем холодные закуски в меню
router.delete('/deleteCigarettesInMenu', deleteCigarettesInArray);
// Добавляем холодные закуски в меню
router.delete('/deleteHookahsInMenu', deleteHookahsInArray);
// Добавляем супы в меню
router.delete('/deleteJuiceInMenu', deleteJuiceInArray);
// Добавляем холодные закуски в меню
router.delete('/deleteCoffeeInMenu', deleteCoffeeInArray);
// Добавляем салаты в меню
router.delete('/deleteTeaInMenu', deleteTeaInArray);
// Добавляем паст закуски в меню
router.delete('/deleteBottledBeerInMenu', deleteBottledBeerInArray);
// Добавляем закуски к пиву в меню
router.delete('/deleteWineInMenu', deleteWineInArray);
// Добавляем горячие блюда в меню
router.delete('/deleteChampagneInMenu', deleteChampagneInArray);
// Добавляем пиццу в меню
router.delete('/deleteVermouthInMenu', deleteVermouthInArray);
// Добавляем пиццу в меню
router.delete('/deleteAperativesInMenu', deleteAperativesInArray);
// Добавляем пиццу в меню
router.delete('/deleteRumInMenu', deleteRumInArray);
// Добавляем пиццу в меню
router.delete('/deleteCognacInMenu', deleteCognachInArray);
// Добавляем пиццу в меню
router.delete('/deleteBrandyInMenu', deleteBrandyInArray);
// Добавляем пиццу в меню
router.delete('/deleteWhiskeyInMenu', deleteWhiskeyInArray);
// Добавляем пиццу в меню
router.delete('/deleteGinInMenu', deleteGinInArray);
// Добавляем пиццу в меню
router.delete('/deleteTequilaInMenu', deleteTequilaInArray);
// Добавляем пиццу в меню
router.delete('/deleteTincturesInMenu', deleteTincturesInArray);
// Добавляем пиццу в меню
router.delete('/deleteVodkaInMenu', deleteVodkaInArray);
// Добавляем пиццу в меню
router.delete('/deleteLiqueursInMenu', deleteLiqueursInArray);
router.delete('/deleteCocktailsInMenu', deleteCocktailsInArray);
router.delete('/deleteShotsInMenu', deleteShotsInArray);

//Меняем значение поля объекта массива
router.put('/changeValueBarMenu', changeValue);

module.exports = router;
