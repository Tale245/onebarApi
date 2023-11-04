const Receipt = require('../models/receipt');
const { NOT__FOUND_ERROR, STATUS__OK } = require('../constants/constants');

const NotFoundError = require('../Error/NotFoundError');
const ForbiddenError = require('../Error/ForbiddenError');

module.exports.getReceipts = (req, res, next) => {
  Receipt.find({}).then((data) => res.status(200).send(data));
};
module.exports.findMyReceipt = (req, res, next) => {
  Receipt.findById(req.params.id).then((data) => res.status(200).send(data));
};
module.exports.createReceipt = async (req, res, next) => {
  const owner = req.user._id;
  const { nameWhoOrders, foods, price } = req.body;
  console.log(req.body);

  const order = await Receipt.create({
    nameWhoOrders: nameWhoOrders,
    foods: foods,
    price: price,
    owner: owner,
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
module.exports.addPositionInReceipt = (req, res, next) => {
  const { name, description, price, gram, imageLink} = req.body;
  const food = {
    name: name,
    description: description,
    price: price,
    gram: gram,
    imageLink: imageLink,
  };
  console.log("req.body:", req.body)
  Receipt.findById(req.params.id)
    .then((data) => {
      data.foods.push(food);
      data.save();
      res.status(200).send(data);
    })
    .catch((err) => {
      next(err);
    });
};
module.exports.changePrice = (req, res, next) => {
  const { newPrice } = req.body;
  Receipt.findById(req.params.id)
    .orFail(() => {
      throw new NotFoundError('Передан невалидный id заказа');
    })
    .then(() => {
      Receipt.findByIdAndUpdate(
        req.params.id,
        {
          $set: { price: newPrice },
        },
        { new: true }
      )
        .then((data) => res.status(STATUS__OK).send(data))
        .catch((e) => next(e));
    })
    .catch((e) => {
      if (e.name === 'CastError') {
        console.log(e);
        next(new BadRequestError('Переданы некорректные данные'));
      } else {
        next(e);
      }
    });
};
module.exports.clearReceipt = (req, res, next) => {
  Receipt.findByIdAndUpdate(
    req.params.id,
    { $set: { foods: [] } },
    { new: true, multi: true }
  )
    .then((data) => {
      res.status(STATUS__OK).send(data);
    })
    .catch((e) => next(e));
};
