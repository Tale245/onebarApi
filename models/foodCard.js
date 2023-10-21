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
        ccal: {
          type: Number,
          require: true,
        },
        linkImage: {
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
        ccal: {
          type: Number,
          require: true,
        },
        linkImage: {
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
        ccal: {
          type: Number,
          require: true,
        },
        linkImage: {
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
        ccal: {
          type: Number,
          require: true,
        },
        linkImage: {
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
        ccal: {
          type: Number,
          require: true,
        },
        linkImage: {
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
        ccal: {
          type: Number,
          require: true,
        },
        linkImage: {
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
        ccal: {
          type: Number,
          require: true,
        },
        linkImage: {
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
        ccal: {
          type: Number,
          require: true,
        },
        linkImage: {
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
    coldSnacksTitle: {
      type: String,
      require: true,
    },
    soupsTitle: {
      type: String,
      require: true,
    },
    pizzaTitle: {
      type: String,
      require: true,
    },
    snacksTitle: {
      type: String,
      require: true,
    },
    saladsTitle: {
      type: String,
      require: true,
    },
    pastesTitle: {
      type: String,
      require: true,
    },
    beerSnacksTitle: {
      type: String,
      require: true,
    },
    hotDishesTitle: {
      type: String,
      require: true,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model('foodCard', foodCardSchema);
