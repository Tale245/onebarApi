const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const { isEmail } = require('validator');
const { urlRegExp } = require('../constants/constants');

const objectId = mongoose.Schema.Types.ObjectId;

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      minLength: 1,
      maxLength: 30,
    },
    admin: {
      type: Boolean,
      enum: [true, false],
    },
    waiter: {
      type: Boolean,
      enum: [true, false],
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
        gram: {
          type: Number,
          require: true,
        },
        imageLink: {
          type: String,
          require: true,
        },
      },
    ],
    email: {
      type: String,
      require: true,
      validate: {
        validator: (v) => isEmail(v),
      },
      unique: true,
    },

    password: {
      type: String,
      require: true,
      minLength: 8,
      select: false,
    },
    codeWord: {
      type: String,
      require: true,
      minLength: 3,
      select: false,
    },
    limit: {
      type: Number,
      default: 0,
    },
  },
  {
    versionKey: false,
  },
  { minimize: false }
);

userSchema.statics.findUserByCredential = function (email, password, codeWord) {
  return this.findOne({ email })
    .select('+password')
    .select('+codeWord')
    .then((user) => {
      if (!user) {
        return Promise.reject(new Error('Введены некорретные данные 1'));
      }
      return bcrypt.compare(password, user.password).then((matched) => {
        if (!matched) {
          return Promise.reject(new Error('Введены некорретные данные 2'));
        }
        return bcrypt.compare(codeWord, user.codeWord).then((matched) => {
          if (!matched) {
            return Promise.reject(new Error('Введены некорретные данные 3'));
          }
          return user;
        });
      });
      // return bcrypt.compare(password, user.password).then((matched) => {
      //   if (!matched) {
      //     return Promise.reject(new Error('Введены некорретные данные 2'));
      //   }

      //   return user;
      // });
    });
};

module.exports = mongoose.model('user', userSchema);
