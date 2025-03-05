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
        category: {
          type: String,
          require: true,
          default: 'Еда',
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
        category: {
          type: String,
          require: true,
          default: 'Еда',
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
        category: {
          type: String,
          require: true,
          default: 'Еда',
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
        category: {
          type: String,
          require: true,
          default: 'Еда',
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
        category: {
          type: String,
          require: true,
          default: 'Еда',
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
        category: {
          type: String,
          require: true,
          default: 'Еда',
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
        category: {
          type: String,
          require: true,
          default: 'Еда',
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
        category: {
          type: String,
          require: true,
          default: 'Еда',
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
        category: {
          type: String,
          require: true,
          default: 'Еда',
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
