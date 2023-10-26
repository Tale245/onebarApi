const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { STATUS__OK } = require('../constants/constants');

const NotFoundError = require('../Error/NotFoundError');
const BadRequestError = require('../Error/BadRequestError');
const SignupError = require('../Error/SignupError');
const UnauthorizedError = require('../Error/UnauthorizedError');

const User = require('../models/user');

module.exports.getUsersInfo = (req, res, next) => {
  User.find({})
    .then((data) => res.status(STATUS__OK).send(data))
    .catch(next);
};
module.exports.getMyInfo = (req, res, next) => {
  User.findById(req.user._id)
    .orFail(() => {
      throw new NotFoundError('Передан невалидный id пользователя');
    })
    .then((data) => res.status(STATUS__OK).send(data))
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new BadRequestError('Переданы некорректные данные'));
      } else {
        next(err);
      }
    });
};
module.exports.createUser = (req, res, next) => {
  const { name, admin, waiter, email, password, codeWord } = req.body;

  bcrypt
    .hash(password, 10)
    .then((hash) => {
      bcrypt.hash(codeWord, 10).then((codeWordHash) => {
        User.create({
          name,
          admin,
          waiter,
          email,
          password: hash,
          codeWord: codeWordHash,
        })
          .then((data) => {
            res.status(STATUS__OK).send({
              name: data.name,
              admin: data.admin,
              email: data.email,
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
      });
    })
    .catch((e) => next(e));
};

module.exports.login = (req, res, next) => {
  const { email, password, codeWord } = req.body;

  return User.findUserByCredential(email, password, codeWord)
    .then((user) => {
      const token = jwt.sign({ _id: user._id }, 'secret-key', {
        expiresIn: '30d',
      });
      res
        .cookie('token', token, { maxAge: 3600000 * 24 * 30, httpOnly: true })
        .send({ token: token });
    })
    .catch(() => {
      next(new UnauthorizedError('Ошибка авторизации'));
    });
};

module.exports.updateUserInfo = (req, res, next) => {
  const { firstName, secondName, about } = req.body;

  User.findByIdAndUpdate(
    req.user._id,
    { firstName, secondName, about },
    { new: true, runValidators: true }
  )
    .then((user) => res.status(STATUS__OK).send(user))
    .catch((e) => {
      if (e.name === 'ValidationError') {
        next(new BadRequestError('Переданы некорректные данные'));
      } else if (e.name === 'CastError') {
        next(new BadRequestError('Переданы некорректные данные'));
      } else {
        next(e);
      }
    });
};
module.exports.updateUserAvatars = (req, res, next) => {
  const { firstAvatar, secondAvatar, thirdAvatar, fourthAvatar } = req.body;

  User.findByIdAndUpdate(
    req.user._id,
    { firstAvatar, secondAvatar, thirdAvatar, fourthAvatar },
    { new: true, runValidators: true }
  )
    .then((user) => res.status(STATUS__OK).send(user))
    .catch((e) => {
      if (e.name === 'ValidationError') {
        next(new BadRequestError('Переданы некорректные данные'));
      } else if (e.name === 'CastError') {
        next(new BadRequestError('Переданы некорректные данные'));
      } else {
        next(e);
      }
    });
};
module.exports.updateLimit = (req, res, next) => {
  const { newLimit } = req.body;
  console.log(newLimit);
  User.findById(req.params.id)
    .orFail(() => {
      throw new NotFoundError('Передан невалидный id пользователя');
    })
    .then(() => {
      User.findByIdAndUpdate(
        req.params.id,
        { $set: { limit: newLimit } },
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
