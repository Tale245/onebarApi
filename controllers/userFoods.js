const Card = require('../models/foodCard');
const User = require('../models/user');

const { NOT__FOUND_ERROR, STATUS__OK } = require('../constants/constants');

const NotFoundError = require('../Error/NotFoundError');
const ForbiddenError = require('../Error/ForbiddenError');
const BadRequestError = require('../Error/BadRequestError');

module.exports.createUserCard = (req, res, next) => {
  const { name, description, price, ccal, imageLink } = req.body;

  const food = { name: name, description: description, price: price, ccal: ccal, imageLink: imageLink };

  User.findById(req.user._id)
    .then((data) => {
      data.foods.push(food);
      data.save();
      res.status(200).send(data);
    })
    .catch((err) => {
      next(err);
    });
};

module.exports.deleteUserCard = (req, res, next) => {
  User.findById(req.user._id)
    .orFail(() => {
      throw new NotFoundError('Передан невалидный id пользователя');
    })
    .then((data) => {
      console.log(req.params)
        User.findByIdAndUpdate(
          req.user._id,
          { $pull: { foods: data.foods[req.params.index] } },
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
module.exports.isFavoriteUserCard = (req, res, next) => {
  const { isFavorite } = req.body;
  User.updateOne(
    { _id: req.user._id, 'images._id': req.params.id },
    { $set: { 'images.$.isFavorite': isFavorite } }
  ).then((data) => res.status(200).send(data));
};

// поставить лайк карточке пользователя
module.exports.likeUserCard = (req, res, next) => {
  console.log(req.params);

  const owner = req.user._id;
  console.log(req.params.ownerID);
  User.findById(req.params.ownerID)
    .then((data) => {
      User.updateOne(
        { _id: data.id, 'images._id': req.params.id },
        { $push: { 'images.$.likes': owner } }
      )
        .populate('owner')
        .then((data) => res.status(200).send(data))
        .catch((e) => next(e));
    })
    .catch((e) => next(e));
};
