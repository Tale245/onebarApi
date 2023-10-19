const Orders = require('../models/orders');

module.exports.createOrder = (req, res, next) => {
  const { nameWhoOrders, foods } = req.body;
  console.log(req.body);
  Orders.create({ nameWhoOrders: nameWhoOrders, foods: foods })
    .then((data) => {
      res
        .status(200)
        .send({ nameWhoOrders: data.nameWhoOrders, foods: data.array });
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
