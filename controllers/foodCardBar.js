const FoodCardBar = require('../models/foodCardBar');
const User = require('../models/user');

const { NOT__FOUND_ERROR, STATUS__OK } = require('../constants/constants');

const NotFoundError = require('../Error/NotFoundError');
const ForbiddenError = require('../Error/ForbiddenError');
const BadRequestError = require('../Error/BadRequestError');
// const id = '67e168ee11b978d86e39d0f6';
const id = '68177b69e1f76c2af11cacf8';


module.exports.getCards = (req, res, next) => {
  FoodCardBar.find({})
    .then((data) => res.status(STATUS__OK).send(data))
    .catch((e) => {
      next(e);
    });
};
module.exports.createFoodMenuBar = async (req, res, next) => {
  const {
    cigarettes,
    hookahs,
    juice,
    coffee,
    tea,
    bottledBeer,
    wine,
    champagne,
    vermouth,
    aperatives,
    rum,
    cognac,
    brandy,
    whiskey,
    gin,
    tequila,
    tinctures,
    vodka,
    liqueurs,
    cocktails,
    shots,
  } = req.body;
  FoodCardBar.create({
    cigarettes,
    hookahs,
    juice,
    coffee,
    tea,
    bottledBeer,
    wine,
    champagne,
    vermouth,
    aperatives,
    rum,
    cognac,
    brandy,
    whiskey,
    gin,
    tequila,
    tinctures,
    vodka,
    liqueurs,
    cocktails,
    shots,
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

// Добавление элементов в массив бар меню
module.exports.addElementInBarMenuArray = (req, res, next) => {
  const { newElement } = req.body;
  console.log(newElement)
  FoodCardBar.findByIdAndUpdate(
    id,
    { $addToSet: { [newElement.itemName]: newElement } },
    { new: true }
  ).then((data) => res.send(data)).catch((e) => next(e))
}

// Удаление элементов из массива бар меню
module.exports.deleteElementsInBarMenuArray = (req, res, next) => {
  const { index, deleteItem } = req.body;
  FoodCardBar.findById(id)
    .orFail(() => {
      throw new NotFoundError('Передан невалидный id пользователя');
    })
    .then((data) => {
      FoodCardBar.findByIdAndUpdate(
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

  FoodCardBar.findById(id)
    .orFail(() => {
      throw new NotFoundError('Передан невалидный id');
    })
    .then(() => {
      FoodCardBar.updateOne(
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
