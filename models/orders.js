const mongoose = require('mongoose');

const { urlRegExp } = require('../constants/constants');

const objectId = mongoose.Schema.Types.ObjectId;

const ordersShema = new mongoose.Schema(
  {
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
        },
        category: {
          type: String,
          require: true,
          enum: ['Еда', 'Напиток'],
        },
      },
    ],
    price: {
      type: Number,
      require: true,
    },
    doneStatus: {
      type: Boolean,
      enum: [true, false],
    },
    createsAt: {
      type: Date,
      default: Date.now,
    },
    owner: {
      type: objectId,
      required: true,
      ref: 'user',
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model('orders', ordersShema);
