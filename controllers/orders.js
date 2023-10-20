const Orders = require('../models/orders');
const { NOT__FOUND_ERROR, STATUS__OK } = require('../constants/constants');

const NotFoundError = require('../Error/NotFoundError');
const ForbiddenError = require('../Error/ForbiddenError');
const BadRequestError = require('../Error/BadRequestError');

module.exports.createOrder = (req, res, next) => {
  const { nameWhoOrders, foods, price } = req.body;
  console.log(req.body);
  Orders.create({ nameWhoOrders: nameWhoOrders, foods: foods, price: price })
    .then((data) => {
      res.status(200).send({
        nameWhoOrders: data.nameWhoOrders,
        foods: data.foods,
        price: data.price,
      });
    })
    .catch((e) => {
      if (e.name === 'ValidationError') {
        next(new BadRequestError('Переданы некорректные данные'));
      } else if (e.code === 11000) {
        next(
          new SignupError(
            'Email адрес занят, используйте другой, либо войдите в аккаунт'
          )
        );
      } else {
        next(e);
      }
    });
};
module.exports.getOrders = (req, res, next) => {
  Orders.find({}).then((data) => res.status(200).send(data));
};

module.exports.addElementInArray = (req, res, next) => {
  const { id, newElement } = req.body;

  Orders.findByIdAndUpdate(
    id,
    { $addToSet: { foods: newElement } },
    { new: true }
  ).then((data) => res.send(data));
};
module.exports.deleteElementInArray = (req, res, next) => {
  const { id, index } = req.body;

  Orders.findById(id)
    .orFail(() => {
      throw new NotFoundError('Передан невалидный id пользователя');
    })
    .then((data) => {
      Orders.findByIdAndUpdate(
        id,
        { $pull: { foods: data.foods[index] } },
        { new: true }
      )
        .then((data) => {
          res.status(STATUS__OK).send(data);
        })
        .catch((e) => next(e));
    })
    .catch((e) => {
      if (e.name === 'CastError') {
        next(new BadRequestError('Переданы некорректные данные'));
      } else {
        next(e);
      }
    });
};
