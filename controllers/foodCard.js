const FoodCard = require('../models/foodCard');
const User = require('../models/user');

const { NOT__FOUND_ERROR, STATUS__OK } = require('../constants/constants');

const NotFoundError = require('../Error/NotFoundError');
const ForbiddenError = require('../Error/ForbiddenError');
const BadRequestError = require('../Error/BadRequestError');
const id = '653402e71b6dc9ba2d4fb253';

module.exports.getCards = (req, res, next) => {
  FoodCard.find({})
    .then((data) => res.status(STATUS__OK).send(data))
    .catch((e) => {
      next(e);
    });
};
module.exports.createCard = async (req, res, next) => {
  const { name, description, price, ccal, imageLink } = req.body;
  FoodCard.create({ name, description, price, ccal, imageLink })
    .then((data) => res.status(STATUS__OK).send(data))
    .catch((e) => {
      if (e.name === 'ValidationError') {
        next(new BadRequestError('Переданые некорректные данные'));
      } else {
        next(e);
      }
    });
};
module.exports.createFoodMenu = async (req, res, next) => {
  const { coldSnacks, soups, snacks, salads, pastes, beerSnacks, hotDishes } =
    req.body;
  FoodCard.create({
    coldSnacks,
    soups,
    snacks,
    salads,
    pastes,
    beerSnacks,
    hotDishes,
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

// Добавление холодных закусок в массив меню
module.exports.addColdSnacksInArray = (req, res, next) => {
  const { newElement } = req.body;

  FoodCard.findByIdAndUpdate(
    id,
    { $addToSet: { coldSnacks: newElement } },
    { new: true }
  ).then((data) => res.send(data));
};
// Добавление супов в массив меню
module.exports.addSoupsInArray = (req, res, next) => {
  const { newElement } = req.body;

  FoodCard.findByIdAndUpdate(
    id,
    { $addToSet: { soups: newElement } },
    { new: true }
  ).then((data) => res.send(data));
};
// Добавление пицц в массив меню
module.exports.addPizzaInArray = (req, res, next) => {
  const { newElement } = req.body;

  FoodCard.findByIdAndUpdate(
    id,
    { $addToSet: { pizza: newElement } },
    { new: true }
  ).then((data) => res.send(data));
};
// Добавление закусок в массив меню
module.exports.addSnacksInArray = (req, res, next) => {
  const { newElement } = req.body;

  FoodCard.findByIdAndUpdate(
    id,
    { $addToSet: { snacks: newElement } },
    { new: true }
  ).then((data) => res.send(data));
};
// Добавление салатов в массив меню
module.exports.addSaladsInArray = (req, res, next) => {
  const { newElement } = req.body;

  FoodCard.findByIdAndUpdate(
    id,
    { $addToSet: { salads: newElement } },
    { new: true }
  ).then((data) => res.send(data));
};
// Добавление паст в массив меню
module.exports.addPastesInArray = (req, res, next) => {
  const { newElement } = req.body;

  FoodCard.findByIdAndUpdate(
    id,
    { $addToSet: { pastes: newElement } },
    { new: true }
  ).then((data) => res.send(data));
};
// Добавление закусок к пиву в массив меню
module.exports.addBeerSnackInArray = (req, res, next) => {
  const { newElement } = req.body;

  FoodCard.findByIdAndUpdate(
    id,
    { $addToSet: { beerSnacks: newElement } },
    { new: true }
  ).then((data) => res.send(data));
};
// Добавление  горячих блюд в массив меню
module.exports.addHotDishesInArray = (req, res, next) => {
  const { newElement } = req.body;

  FoodCard.findByIdAndUpdate(
    id,
    { $addToSet: { hotDishes: newElement } },
    { new: true }
  ).then((data) => res.send(data));
};
