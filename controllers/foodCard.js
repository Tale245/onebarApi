const FoodCard = require('../models/foodCard');
const User = require('../models/user');

const { NOT__FOUND_ERROR, STATUS__OK } = require('../constants/constants');

const NotFoundError = require('../Error/NotFoundError');
const ForbiddenError = require('../Error/ForbiddenError');
const BadRequestError = require('../Error/BadRequestError');
// const id = '67e168e211b978d86e39d0f4';
const id = '68177b66e1f76c2af11cacf6';

module.exports.getCards = (req, res, next) => {
  FoodCard.find({})
    .then((data) => res.status(STATUS__OK).send(data))
    .catch((e) => {
      next(e);
    });
};
module.exports.createFoodMenu = async (req, res, next) => {
  const {
    coldSnacks,
    iceCream,
    soups,
    snacks,
    salads,
    pastes,
    beerSnacks,
    hotDishes,
    pizza,
    coldSnacksTitle,
    iceCreamTitle,
    soupsTitle,
    snacksTitle,
    saladsTitle,
    pastesTitle,
    beerSnacksTitle,
    hotDishesTitle,
    pizzaTitle,
  } = req.body;
  FoodCard.create({
    coldSnacks,
    iceCream,
    soups,
    snacks,
    salads,
    pastes,
    beerSnacks,
    hotDishes,
    pizza,
    coldSnacksTitle,
    iceCreamTitle,
    soupsTitle,
    snacksTitle,
    saladsTitle,
    pastesTitle,
    beerSnacksTitle,
    hotDishesTitle,
    pizzaTitle,
  })
    .then((data) => res.status(STATUS__OK).send(data))
    .catch((e) => {
      if (e.name === 'ValidationError') {
        next(new BadRequestError('Переданые некорректные данные'));
      } else {
        next(e);
      }
    });
};


// Добавление еды в массив меню
module.exports.addElementInMenuArray = (req, res, next) => {
  console.log('req.body add:', req.body)

  const { newElement } = req.body;

  FoodCard.findByIdAndUpdate(
    id,
    { $addToSet: { [newElement.itemName]: newElement } },
    { new: true }
  ).then((data) => res.send(data)).catch((e) => next(e))
}

// Удаление еды из массива меню
module.exports.deleteElementsInMenuArray = (req, res, next) => {
  const { index, deleteItem } = req.body;
  FoodCard.findById(id)
    .orFail(() => {
      throw new NotFoundError('Передан невалидный id пользователя');
    })
    .then((data) => {
      console.log(data)
      FoodCard.findByIdAndUpdate(
        id,
        { $pull: { [deleteItem]: data[deleteItem][index] } },
        { new: true }
      ).then((data) => res.send(data)).catch((e) => next(e))
    }).catch((e) => next(e))
};

//Меняем value объекта массива
module.exports.changeValue = (req, res, next) => {
  const { categories, categoriesValue, newValue, objectId } = req.body;

  const findCategories = `${categories}._id`;

  FoodCard.findById(id)
    .orFail(() => {
      throw new NotFoundError('Передан невалидный id');
    })
    .then(() => {
      FoodCard.updateOne(
        {
          _id: id,
          [findCategories]: objectId,
        },
        { $set: { [`${categories}.$.${categoriesValue}`]: newValue } },
        { arrayFilters: [{ 'elem._id': objectId }] }
      )
        .then((data) => res.send(data))
        .catch((e) => next(e));
    }).catch((e) => next(e))
};