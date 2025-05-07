const Orders = require('../models/orders');
const fs = require('fs');
const path = require('path');
const { NOT__FOUND_ERROR, STATUS__OK } = require('../constants/constants');

const NotFoundError = require('../Error/NotFoundError');
const ForbiddenError = require('../Error/ForbiddenError');
const BadRequestError = require('../Error/BadRequestError');
const wss = require('../app');

module.exports.createOrder = async (req, res, next) => {
  const owner = req.user._id;
  const { nameWhoOrders, foods, price, doneStatus } = req.body;
  console.log(req.body);

  const order = await Orders.create({
    nameWhoOrders: nameWhoOrders,
    foods: foods,
    price: price,
    doneStatus: doneStatus,
    owner: owner
  });

  order
    .populate(['owner'])
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((e) => {
      if (e.name === 'ValidationError') {
        console.log(e);
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
  Orders.find({}).then((data) => res.status(200).send(data)).catch((e) => next(e))
};

module.exports.addElementInArray = (req, res, next) => {
  const { id, newElement } = req.body;

  Orders.findByIdAndUpdate(
    id,
    { $addToSet: { foods: newElement } },
    { new: true }
  ).then((data) => res.send(data)).catch((e) => next(e))
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


module.exports.updateDoneStatus = (req, res, next) => {
  const { doneStatus } = req.body;
  Orders.findById(req.params.id)
    .orFail(() => {
      throw new NotFoundError('Передан невалидный id заказа');
    })
    .then(() => {
      Orders.findByIdAndUpdate(
        req.params.id,
        { $set: { doneStatus: doneStatus } },
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
module.exports.getReceipt = (req, res) => {
  const { object, name } = req.body;
  console.log(name);
  const data = JSON.stringify(object);
  const fileName = `ordersReceipt\\${name}.txt`;

  fs.writeFile(fileName, data, function (err) {
    if (err) {
      return console.error(err);
    } else {
      res.set({
        'Content-Disposition': `attachment; filename="${fileName}"`,
        'Content-Type': 'text/plain',
      });
      const fileStream = fs.createReadStream(fileName);
      fileStream.pipe(res);
      fileStream.on('close', () => {
        fs.unlink(fileName, (err) => {
          if (err) console.error('Ошибка при удалении файла:', err);
          else console.log('Файл успешно удален.');
        });
      });
    }
  });
};
