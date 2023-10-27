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
          require: false,
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
    hookahs: [
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
          require: false,
          default: 700,
        },
        priceRelax: {
          type: Number,
          require: false,
          default: 900,
        },
        gram: {
          type: Number,
          require: false,
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
        },
        hide: {
          type: Boolean,
          require: false,
          enum: [true, false],
          default: false,
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
        },
        hide: {
          type: Boolean,
          require: false,
          enum: [true, false],
          default: false,
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
        },
        hide: {
          type: Boolean,
          require: false,
          enum: [true, false],
          default: false,
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
        },
        hide: {
          type: Boolean,
          require: false,
          enum: [true, false],
          default: false,
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
        },
        hide: {
          type: Boolean,
          require: false,
          enum: [true, false],
          default: false,
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
        },
        hide: {
          type: Boolean,
          require: false,
          enum: [true, false],
          default: false,
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
        },
        hide: {
          type: Boolean,
          require: false,
          enum: [true, false],
          default: false,
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
        },
        hide: {
          type: Boolean,
          require: false,
          enum: [true, false],
          default: false,
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
        },
        hide: {
          type: Boolean,
          require: false,
          enum: [true, false],
          default: false,
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
        },
        hide: {
          type: Boolean,
          require: false,
          enum: [true, false],
          default: false,
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
        },
        hide: {
          type: Boolean,
          require: false,
          enum: [true, false],
          default: false,
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
        },
        hide: {
          type: Boolean,
          require: false,
          enum: [true, false],
          default: false,
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
        },
        hide: {
          type: Boolean,
          require: false,
          enum: [true, false],
          default: false,
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
        },
        hide: {
          type: Boolean,
          require: false,
          enum: [true, false],
          default: false,
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
        },
        hide: {
          type: Boolean,
          require: false,
          enum: [true, false],
          default: false,
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
        },
        hide: {
          type: Boolean,
          require: false,
          enum: [true, false],
          default: false,
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
        },
        hide: {
          type: Boolean,
          require: false,
          enum: [true, false],
          default: false,
        },
      },
    ],
    cigarettesTitle: {
      type: String,
      default: 'Сигареты',
    },
    hookahsTitle: {
      type: String,
      default: 'Кальяны',
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
