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
        category: {
          type: String,
          default: 'Напиток',
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
        category: {
          type: String,
          default: 'Напиток',
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
        category: {
          type: String,
          default: 'Напиток',
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
        category: {
          type: String,
          default: 'Напиток',
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
        category: {
          type: String,
          default: 'Напиток',
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
        category: {
          type: String,
          default: 'Напиток',
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
        category: {
          type: String,
          default: 'Напиток',
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
        category: {
          type: String,
          default: 'Напиток',
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
        category: {
          type: String,
          default: 'Напиток',
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
        category: {
          type: String,
          default: 'Напиток',
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
        category: {
          type: String,
          default: 'Напиток',
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
        category: {
          type: String,
          default: 'Напиток',
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
        category: {
          type: String,
          default: 'Напиток',
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
        category: {
          type: String,
          default: 'Напиток',
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
        category: {
          type: String,
          default: 'Напиток',
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
        category: {
          type: String,
          default: 'Напиток',
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
        category: {
          type: String,
          default: 'Напиток',
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
        category: {
          type: String,
          default: 'Напиток',
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
        category: {
          type: String,
          require: true,
          default: 'Напиток',
        },
      },
    ],
    cocktails: [
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
          default: 'Напиток',
        },
      },
    ],
    shots: [
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
          default: 'Напиток',
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
    cocktailsTitle: {
      type: String,
      default: 'Коктейли',
    },
    shotsTitle: {
      type: String,
      default: 'Шоты',
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model('foodCardBar', foodCardBarSchema);
