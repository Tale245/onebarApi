const mongoose = require('mongoose');

const { urlRegExp } = require('../constants/constants');

const foodCardBarSchema = new mongoose.Schema(
  {
    cigarettes: [
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
          require: false
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
    juice: [
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
          validate: {
            validator(v) {
              return urlRegExp.test(v);
            },
          },
        },
      },
    ],
    coffee: [
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
          validate: {
            validator(v) {
              return urlRegExp.test(v);
            },
          },
        },
      },
    ],
    tea: [
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
          validate: {
            validator(v) {
              return urlRegExp.test(v);
            },
          },
        },
      },
    ],
    bottledBeer: [
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
          validate: {
            validator(v) {
              return urlRegExp.test(v);
            },
          },
        },
      },
    ],
    wine: [
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
          validate: {
            validator(v) {
              return urlRegExp.test(v);
            },
          },
        },
      },
    ],
    champagne: [
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
          validate: {
            validator(v) {
              return urlRegExp.test(v);
            },
          },
        },
      },
    ],
    vermouth: [
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
          validate: {
            validator(v) {
              return urlRegExp.test(v);
            },
          },
        },
      },
    ],
    aperatives: [
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
          validate: {
            validator(v) {
              return urlRegExp.test(v);
            },
          },
        },
      },
    ],
    rum: [
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
          validate: {
            validator(v) {
              return urlRegExp.test(v);
            },
          },
        },
      },
    ],
    cognac: [
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
          validate: {
            validator(v) {
              return urlRegExp.test(v);
            },
          },
        },
      },
    ],
    brandy: [
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
          validate: {
            validator(v) {
              return urlRegExp.test(v);
            },
          },
        },
      },
    ],
    whiskey: [
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
          validate: {
            validator(v) {
              return urlRegExp.test(v);
            },
          },
        },
      },
    ],
    gin: [
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
          validate: {
            validator(v) {
              return urlRegExp.test(v);
            },
          },
        },
      },
    ],
    tequila: [
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
          validate: {
            validator(v) {
              return urlRegExp.test(v);
            },
          },
        },
      },
    ],
    tinctures: [
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
          validate: {
            validator(v) {
              return urlRegExp.test(v);
            },
          },
        },
      },
    ],
    vodka: [
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
          validate: {
            validator(v) {
              return urlRegExp.test(v);
            },
          },
        },
      },
    ],
    liqueurs: [
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
          validate: {
            validator(v) {
              return urlRegExp.test(v);
            },
          },
        },
      },
    ],
    cigarettesTitle: {
      type: String,
      default: 'Сигареты',
    },
    juiceTitle: {
      type: String,
      default: 'Соки',
    },
    coffeeTitle: {
      type: String,
      default: 'Кофе',
    },
    teaTitle: {
      type: String,
      default: 'Чай',
    },
    bottledBeerTitle: {
      type: String,
      default: 'Пиво бутылочное',
    },
    wineTitle: {
      type: String,
      default: 'Вино',
    },
    champagneTitle: {
      type: String,
      default: 'Шампанское',
    },
    vermouthTitle: {
      type: String,
      default: 'Вермут',
    },
    aperativesTitle: {
      type: String,
      default: 'Аперативы',
    },
    rumTitle: {
      type: String,
      default: 'Ром',
    },
    cognacTitle: {
      type: String,
      default: 'Коньяк',
    },
    brandyTitle: {
      type: String,
      default: 'Бренди',
    },
    whiskeyTitle: {
      type: String,
      default: 'Виски',
    },
    ginTitle: {
      type: String,
      default: 'Джин',
    },
    tequilaTitle: {
      type: String,
      default: 'Текила',
    },
    tincturesTitle: {
      type: String,
      default: 'Настойки',
    },
    vodkaTitle: {
      type: String,
      default: 'Водка',
    },
    liqueursTitle: {
      type: String,
      default: 'Ликёры',
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model('foodCardBar', foodCardBarSchema);
