const mongoose = require('mongoose');
// const objectId = mongoose.Schema.Types.ObjectId;

const { urlRegExp } = require('../constants/constants');

const foodCardSchema = new mongoose.Schema(
  {
    coldSnacks: [
      {
        name: {
          type: String,
          require: true,
        },
        description: {
          type: String,
          require: false,
          maxLength: 300,
        },
        price: {
          type: Number,
          require: true,
        },
        gram: {
          type: Number,
          require: true,
        },
        linkImage: {
          type: String,
          require: true,
        },
        hide: {
          type: Boolean,
          require: false,
          enum: [true, false],
          default: false,
        },
      },
    ],
    iceCream: [
      {
        name: {
          type: String,
          require: true,
        },
        description: {
          type: String,
          require: false,
          maxLength: 300,
        },
        price: {
          type: Number,
          require: true,
        },
        gram: {
          type: Number,
          require: true,
        },
        linkImage: {
          type: String,
          require: true,
        },
        hide: {
          type: Boolean,
          require: false,
          enum: [true, false],
          default: false,
        },
      },
    ],
    soups: [
      {
        name: {
          type: String,
          require: true,
        },
        description: {
          type: String,
          require: false,
          maxLength: 300,
        },
        price: {
          type: Number,
          require: true,
        },
        gram: {
          type: Number,
          require: true,
        },
        linkImage: {
          type: String,
          require: true,
        },
        hide: {
          type: Boolean,
          require: false,
          enum: [true, false],
          default: false,
        },
      },
    ],
    pizza: [
      {
        name: {
          type: String,
          require: true,
        },
        description: {
          type: String,
          require: false,
          maxLength: 300,
        },
        price: {
          type: Number,
          require: true,
        },
        gram: {
          type: Number,
          require: true,
        },
        linkImage: {
          type: String,
          require: true,
        },
        hide: {
          type: Boolean,
          require: false,
          enum: [true, false],
          default: false,
        },
      },
    ],
    snacks: [
      {
        name: {
          type: String,
          require: true,
        },
        description: {
          type: String,
          require: false,
          maxLength: 300,
        },
        price: {
          type: Number,
          require: true,
        },
        gram: {
          type: Number,
          require: true,
        },
        linkImage: {
          type: String,
          require: true,
        },
        hide: {
          type: Boolean,
          require: false,
          enum: [true, false],
          default: false,
        },
      },
    ],
    salads: [
      {
        name: {
          type: String,
          require: true,
        },
        description: {
          type: String,
          require: false,
          maxLength: 300,
        },
        price: {
          type: Number,
          require: true,
        },
        gram: {
          type: Number,
          require: true,
        },
        linkImage: {
          type: String,
          require: true,
        },
        hide: {
          type: Boolean,
          require: false,
          enum: [true, false],
          default: false,
        },
      },
    ],
    pastes: [
      {
        name: {
          type: String,
          require: true,
        },
        description: {
          type: String,
          require: false,
          maxLength: 300,
        },
        price: {
          type: Number,
          require: true,
        },
        gram: {
          type: Number,
          require: true,
        },
        linkImage: {
          type: String,
          require: true,
        },
        hide: {
          type: Boolean,
          require: false,
          enum: [true, false],
          default: false,
        },
      },
    ],
    beerSnacks: [
      {
        name: {
          type: String,
          require: true,
        },
        description: {
          type: String,
          require: false,
          maxLength: 300,
        },
        price: {
          type: Number,
          require: true,
        },
        gram: {
          type: Number,
          require: true,
        },
        linkImage: {
          type: String,
          require: true,
        },
        hide: {
          type: Boolean,
          require: false,
          enum: [true, false],
          default: false,
        },
      },
    ],
    hotDishes: [
      {
        name: {
          type: String,
          require: true,
        },
        description: {
          type: String,
          require: false,
          maxLength: 300,
        },
        price: {
          type: Number,
          require: true,
        },
        gram: {
          type: Number,
          require: true,
        },
        linkImage: {
          type: String,
          require: true,
        },
        hide: {
          type: Boolean,
          require: false,
          enum: [true, false],
          default: false,
        },
      },
    ],
    coldSnacksTitle: {
      type: String,
      default: 'Холодные закуски',
    },
    iceCreamTitle: {
      type: String,
      default: 'Мороженое',
    },
    soupsTitle: {
      type: String,
      default: 'Супы',

    },
    pizzaTitle: {
      type: String,
      default: 'Пицца',

    },
    snacksTitle: {
      type: String,
      default: 'Закуски',

    },
    saladsTitle: {
      type: String,
      default: 'Салаты',

    },
    pastesTitle: {
      type: String,
      default: 'Пасты',

    },
    beerSnacksTitle: {
      type: String,
      default: 'Закуски к пиву',

    },
    hotDishesTitle: {
      type: String,
      default: 'Горячие блюда',

    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model('foodCard', foodCardSchema);
