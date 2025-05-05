const FoodCard = require('../models/foodCard');
const User = require('../models/user');

const { NOT__FOUND_ERROR, STATUS__OK } = require('../constants/constants');

const NotFoundError = require('../Error/NotFoundError');
const ForbiddenError = require('../Error/ForbiddenError');
const BadRequestError = require('../Error/BadRequestError');
// const id = '67e168e211b978d86e39d0f4';
const id = '68177b66e1f76c2af11cacf6';

module.exports.getCards = (req, res, next) => {
  FoodCard.find({})
    .then((data) => res.status(STATUS__OK).send(data))
    .catch((e) => {
      next(e);
    });
};
module.exports.createCard = async (req, res, next) => {
  const { name, description, price, gram, imageLink } = req.body;
  FoodCard.create({ name, description, price, gram, imageLink })
    .then((data) => res.status(STATUS__OK).send(data))
    .catch((e) => {
      if (e.name === 'ValidationError') {
        next(new BadRequestError('Переданые некорректные данные'));
      } else {
        next(e);
      }
    });
};
module.exports.createFoodMenu = async (req, res, next) => {
  const {
    coldSnacks,
    iceCream,
    soups,
    snacks,
    salads,
    pastes,
    beerSnacks,
    hotDishes,
    pizza,
    coldSnacksTitle,
    iceCreamTitle,
    soupsTitle,
    snacksTitle,
    saladsTitle,
    pastesTitle,
    beerSnacksTitle,
    hotDishesTitle,
    pizzaTitle,
  } = req.body;
  FoodCard.create({
    coldSnacks,
    iceCream,
    soups,
    snacks,
    salads,
    pastes,
    beerSnacks,
    hotDishes,
    pizza,
    coldSnacksTitle,
    iceCreamTitle,
    soupsTitle,
    snacksTitle,
    saladsTitle,
    pastesTitle,
    beerSnacksTitle,
    hotDishesTitle,
    pizzaTitle,
  })
    .then((data) => res.status(STATUS__OK).send(data))
    .catch((e) => {
      if (e.name === 'ValidationError') {
        next(new BadRequestError('Переданые некорректные данные'));
      } else {
        next(e);
      }
    });
};

// Добавление холодных закусок в массив меню
module.exports.addColdSnacksInArray = (req, res, next) => {
  const { newElement } = req.body;

  FoodCard.findByIdAndUpdate(
    id,
    { $addToSet: { coldSnacks: newElement } },
    { new: true }
  ).then((data) => res.send(data));
};
// Добавление холодных закусок в массив меню
module.exports.addIceCreamInArray = (req, res, next) => {
  const { newElement } = req.body;

  FoodCard.findByIdAndUpdate(
    id,
    { $addToSet: { iceCream: newElement } },
    { new: true }
  ).then((data) => res.send(data));
};
// Добавление супов в массив меню
module.exports.addSoupsInArray = (req, res, next) => {
  const { newElement } = req.body;

  FoodCard.findByIdAndUpdate(
    id,
    { $addToSet: { soups: newElement } },
    { new: true }
  ).then((data) => res.send(data));
};
// Добавление пицц в массив меню
module.exports.addPizzaInArray = (req, res, next) => {
  const { newElement } = req.body;

  FoodCard.findByIdAndUpdate(
    id,
    { $addToSet: { pizza: newElement } },
    { new: true }
  ).then((data) => res.send(data));
};
// Добавление закусок в массив меню
module.exports.addSnacksInArray = (req, res, next) => {
  const { newElement } = req.body;

  FoodCard.findByIdAndUpdate(
    id,
    { $addToSet: { snacks: newElement } },
    { new: true }
  ).then((data) => res.send(data));
};
// Добавление салатов в массив меню
module.exports.addSaladsInArray = (req, res, next) => {
  const { newElement } = req.body;

  FoodCard.findByIdAndUpdate(
    id,
    { $addToSet: { salads: newElement } },
    { new: true }
  ).then((data) => res.send(data));
};
// Добавление паст в массив меню
module.exports.addPastesInArray = (req, res, next) => {
  const { newElement } = req.body;

  FoodCard.findByIdAndUpdate(
    id,
    { $addToSet: { pastes: newElement } },
    { new: true }
  ).then((data) => res.send(data));
};
// Добавление закусок к пиву в массив меню
module.exports.addBeerSnackInArray = (req, res, next) => {
  const { newElement } = req.body;

  FoodCard.findByIdAndUpdate(
    id,
    { $addToSet: { beerSnacks: newElement } },
    { new: true }
  ).then((data) => res.send(data));
};
// Добавление  горячих блюд в массив меню
module.exports.addHotDishesInArray = (req, res, next) => {
  const { newElement } = req.body;

  FoodCard.findByIdAndUpdate(
    id,
    { $addToSet: { hotDishes: newElement } },
    { new: true }
  ).then((data) => res.send(data));
};

// Удаление холодных закусок в массив меню
module.exports.deleteColdSnacksInArray = (req, res, next) => {
  const { index } = req.body;
  FoodCard.findById(id)
    .orFail(() => {
      throw new NotFoundError('Передан невалидный id пользователя');
    })
    .then((data) => {
      FoodCard.findByIdAndUpdate(
        id,
        { $pull: { coldSnacks: data.coldSnacks[index] } },
        { new: true }
      ).then((data) => res.send(data));
    });
};
// Удаление холодных закусок в массив меню
module.exports.deleteIceCreamInArray = (req, res, next) => {
  const { index } = req.body;
  FoodCard.findById(id)
    .orFail(() => {
      throw new NotFoundError('Передан невалидный id пользователя');
    })
    .then((data) => {
      FoodCard.findByIdAndUpdate(
        id,
        { $pull: { iceCream: data.iceCream[index] } },
        { new: true }
      ).then((data) => res.send(data));
    });
};
// Удаление супов в массив меню
module.exports.deleteSoupsInArray = (req, res, next) => {
  const { index } = req.body;
  FoodCard.findById(id)
    .orFail(() => {
      throw new NotFoundError('Передан невалидный id пользователя');
    })
    .then((data) => {
      FoodCard.findByIdAndUpdate(
        id,
        { $pull: { soups: data.soups[index] } },
        { new: true }
      ).then((data) => res.send(data));
    });
};
// Удаление пицц в массив меню
module.exports.deletePizzaInArray = (req, res, next) => {
  const { index } = req.body;
  FoodCard.findById(id)
    .orFail(() => {
      throw new NotFoundError('Передан невалидный id пользователя');
    })
    .then((data) => {
      FoodCard.findById(id)
        .orFail(() => {
          throw new NotFoundError('Передан невалидный id пользователя');
        })
        .then((data) => {
          FoodCard.findByIdAndUpdate(
            id,
            { $pull: { pizza: data.pizza[index] } },
            { new: true }
          ).then((data) => res.send(data));
        });
    });
};
// Удаление закусок в массив меню
module.exports.deleteSnacksInArray = (req, res, next) => {
  const { index } = req.body;
  FoodCard.findById(id)
    .orFail(() => {
      throw new NotFoundError('Передан невалидный id пользователя');
    })
    .then((data) => {
      FoodCard.findByIdAndUpdate(
        id,
        { $pull: { snacks: data.snacks[index] } },
        { new: true }
      ).then((data) => res.send(data));
    });
};

// Удаление салатов в массив меню
module.exports.deleteSaladsInArray = (req, res, next) => {
  const { index } = req.body;
  FoodCard.findById(id)
    .orFail(() => {
      throw new NotFoundError('Передан невалидный id пользователя');
    })
    .then((data) => {
      FoodCard.findByIdAndUpdate(
        id,
        { $pull: { salads: data.salads[index] } },
        { new: true }
      ).then((data) => res.send(data));
    });
};
// Удаление паст в массив меню
module.exports.deletePastesInArray = (req, res, next) => {
  const { index } = req.body;
  FoodCard.findById(id)
    .orFail(() => {
      throw new NotFoundError('Передан невалидный id пользователя');
    })
    .then((data) => {
      FoodCard.findByIdAndUpdate(
        id,
        { $pull: { pastes: data.pastes[index] } },
        { new: true }
      ).then((data) => res.send(data));
    });
};
// Удаление закусок к пиву в массив меню
module.exports.deleteBeerSnackInArray = (req, res, next) => {
  const { index } = req.body;
  FoodCard.findById(id)
    .orFail(() => {
      throw new NotFoundError('Передан невалидный id пользователя');
    })
    .then((data) => {
      FoodCard.findByIdAndUpdate(
        id,
        { $pull: { beerSnacks: data.beerSnacks[index] } },
        { new: true }
      ).then((data) => res.send(data));
    });
};
// Удаление  горячих блюд в массив меню
module.exports.deleteHotDishesInArray = (req, res, next) => {
  const { index } = req.body;
  FoodCard.findById(id)
    .orFail(() => {
      throw new NotFoundError('Передан невалидный id пользователя');
    })
    .then((data) => {
      FoodCard.findByIdAndUpdate(
        id,
        { $pull: { hotDishes: data.hotDishes[index] } },
        { new: true }
      ).then((data) => res.send(data));
    });
};
// module.exports.updateHideStatus = (req, res, next) => {
//   const { hideStatus, id } = req.body;
//   FoodCard.findById(req.params.id)
//     .orFail(() => {
//       throw new NotFoundError('Передан невалидный id пользователя');
//     })
//     .then(() => {
//       FoodCard.findByIdAndUpdate(
//         req.params.id,
//         { $set: { 'coldSnacks.hide': hideStatus } },
//         { new: true }
//       )
//         .then((data) => {
//           res.status(STATUS__OK).send(data);
//         })
//         .catch((e) => next(e));
//     })
//     .catch((e) => {
//       if (e.name === 'CastError') {
//         console.log(e);
//         next(new BadRequestError('Переданы некорректные данные'));
//       } else {
//         next(e);
//       }
//     });
// };

//Меняем value объекта массива
module.exports.changeValue = (req, res, next) => {
  const { categories, categoriesValue, newValue, objectId } = req.body;

  const findCategories = `${categories}._id`;

  FoodCard.findById(id)
    .orFail(() => {
      throw new NotFoundError('Передан невалидный id');
    })
    .then(() => {
      FoodCard.updateOne(
        {
          _id: id,
          [findCategories]: objectId,
        },
        { $set: { [`${categories}.$.${categoriesValue}`]: newValue } },
        { arrayFilters: [{ 'elem._id': objectId }] }
      )
        .then((data) => res.send(data))
        .catch((e) => next(e));
    });
};