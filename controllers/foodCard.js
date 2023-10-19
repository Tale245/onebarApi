const Card = require('../models/foodCard');
const User = require('../models/user');

const { NOT__FOUND_ERROR, STATUS__OK } = require('../constants/constants');

const NotFoundError = require('../Error/NotFoundError');
const ForbiddenError = require('../Error/ForbiddenError');
const BadRequestError = require('../Error/BadRequestError');

module.exports.getCards = (req, res, next) => {
  Card.find({})
    .populate(['owner', 'likes'])
    .then((data) => res.status(STATUS__OK).send(data))
    .catch((e) => {
      next(e);
    });
};
module.exports.createCard = async (req, res, next) => {
  const owner = req.user._id;
  const { link, description } = req.body;

  const card = await Card.create({ link, description, owner });

  card
    .populate('owner')
    .then((data) => res.status(STATUS__OK).send(data))
    .catch((e) => {
      if (e.name === 'ValidationError') {
        next(new BadRequestError('Переданые некорректные данные'));
      } else {
        next(e);
      }
    });
};
module.exports.deleteCard = (req, res, next) => {
  Card.findById(req.params.id)
    .populate('owner')
    .orFail(() => {
      throw new NotFoundError('Запрашиваемая карточка не найдена');
    })
    .then((data) => {
      if (data.owner.id !== req.user._id) {
        throw new ForbiddenError('Отказано в доступе');
      } else {
        Card.findByIdAndRemove(data._id)
          .then((data) => res.status(STATUS__OK).send(data))
          .catch((e) => {
            next(e);
          });
      }
    })
    .catch((e) => {
      if (e.name === 'CastError') {
        next(new BadRequestError('Переданы некорректные данные'));
      } else {
        next(e);
      }
    });
};

// поставить лайк карточке
module.exports.likeCard = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.id,
    { $addToSet: { likes: req.user._id } },
    { new: true }
  )
    .populate(['likes', 'owner'])
    .orFail(() => {
      throw new NotFoundError('Передан невалидный id пользователя');
    })
    .then((data) => res.status(STATUS__OK).send(data))
    .catch((e) => {
      if (e.name === 'CastError') {
        next(new BadRequestError('Переданы некорректные данные'));
      } else if (e.statusCode === NOT__FOUND_ERROR) {
        next(new NotFoundError('Запрашиваемая карточка не найдена'));
      } else {
        next(e);
      }
    });
};
module.exports.dislikeCard = (req, res, next) => {
  console.log(req.params.id);
  Card.findByIdAndUpdate(
    req.params.id,
    { $pull: { likes: req.user._id } },
    { new: true }
  )
    .populate(['likes', 'owner'])
    .orFail(() => {
      throw new NotFoundError('Передан невалидный id пользователя');
    })
    .then((data) => res.status(STATUS__OK).send(data))
    .catch((e) => {
      if (e.name === 'CastError') {
        next(new BadRequestError('Переданы некорректные данные'));
      } else if (e.statusCode === NOT__FOUND_ERROR) {
        next(new NotFoundError('Запрашиваемая карточка не найдена'));
      } else {
        next(e);
      }
    });
};
module.exports.isFavorite = (req, res, next) => {
  const { isFavorite } = req.body;

  Card.findByIdAndUpdate(
    req.params.id,
    { isFavorite },
    { new: true, runValidators: true }
  )
    .then((data) => res.status(STATUS__OK).send(data))
    .catch((e) => {
      if (e.name === 'CastError') {
        next(new BadRequestError('Переданы некорректные данные'));
      } else if (e.statusCode === NOT__FOUND_ERROR) {
        next(new NotFoundError('Запрашиваемая карточка не найдена'));
      } else {
        next(e);
      }
    });
};
