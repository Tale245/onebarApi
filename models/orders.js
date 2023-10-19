const mongoose = require('mongoose');

const ordersShema = new mongoose.Schema({
  nameWhoOrders: {
    type: String,
    require: true,
  },
  foods: [
    {
      name: {
        type: String,
        require: true,
      },
      description: {
        type: String,
        require: true,
      },
      price: {
        type: Number,
        require: true,
      },
      ccal: {
        type: Number,
        require: true,
      },
      imageLink: {
        type: String,
        require: true,
        validate: {
          validator(v) {
            return urlRegExp.test(v);
          },
        },
      },
    },
  ],
});

module.exports = mongoose.model('orders', ordersShema)