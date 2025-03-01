const FoodCardBar = require('../models/foodCardBar');
const User = require('../models/user');

const { NOT__FOUND_ERROR, STATUS__OK } = require('../constants/constants');

const NotFoundError = require('../Error/NotFoundError');
const ForbiddenError = require('../Error/ForbiddenError');
const BadRequestError = require('../Error/BadRequestError');
const id = '6568f0609925afaa13ad69c2';

module.exports.getCards = (req, res, next) => {
  FoodCardBar.find({})
    .then((data) => res.status(STATUS__OK).send(data))
    .catch((e) => {
      next(e);
    });
};
module.exports.createFoodMenuBar = async (req, res, next) => {
  const {
    cigarettes,
    hookahs,
    juice,
    coffee,
    tea,
    bottledBeer,
    wine,
    champagne,
    vermouth,
    aperatives,
    rum,
    cognac,
    brandy,
    whiskey,
    gin,
    tequila,
    tinctures,
    vodka,
    liqueurs,
  } = req.body;
  FoodCardBar.create({
    cigarettes,
    hookahs,
    juice,
    coffee,
    tea,
    bottledBeer,
    wine,
    champagne,
    vermouth,
    aperatives,
    rum,
    cognac,
    brandy,
    whiskey,
    gin,
    tequila,
    tinctures,
    vodka,
    liqueurs,
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

// Добавление Сигарет в массив меню
module.exports.addCigarettesInArray = (req, res, next) => {
  const { newElement } = req.body;

  FoodCardBar.findByIdAndUpdate(
    id,
    { $addToSet: { cigarettes: newElement } },
    { new: true }
  )
    .then((data) => res.send(data))
    .catch((e) => next(e));
};

// Добавление Сигарет в массив меню
module.exports.addHookahsInArray = (req, res, next) => {
  const { newElement } = req.body;

  FoodCardBar.findByIdAndUpdate(
    id,
    { $addToSet: { hookahs: newElement } },
    { new: true }
  )
    .then((data) => res.send(data))
    .catch((e) => next(e));
};
// Добавление сока в массив меню
module.exports.addJuiceInArray = (req, res, next) => {
  const { newElement } = req.body;

  FoodCardBar.findByIdAndUpdate(
    id,
    { $addToSet: { juice: newElement } },
    { new: true }
  ).then((data) => res.send(data));
};
// Добавление кофе в массив меню
module.exports.addCoffeeInArray = (req, res, next) => {
  const { newElement } = req.body;

  FoodCardBar.findByIdAndUpdate(
    id,
    { $addToSet: { coffee: newElement } },
    { new: true }
  )
    .then((data) => res.send(data))
    .catch((e) => next(e));
};
// Добавление чая в массив меню
module.exports.addTeaInArray = (req, res, next) => {
  const { newElement } = req.body;

  FoodCardBar.findByIdAndUpdate(
    id,
    { $addToSet: { tea: newElement } },
    { new: true }
  ).then((data) => res.send(data));
};
// Добавление бутилированого пива в массив меню
module.exports.addBottledBeerInArray = (req, res, next) => {
  const { newElement } = req.body;

  FoodCardBar.findByIdAndUpdate(
    id,
    { $addToSet: { bottledBeer: newElement } },
    { new: true }
  ).then((data) => res.send(data));
};
// Добавление вина в массив меню
module.exports.addWineInArray = (req, res, next) => {
  const { newElement } = req.body;

  FoodCardBar.findByIdAndUpdate(
    id,
    { $addToSet: { wine: newElement } },
    { new: true }
  ).then((data) => res.send(data));
};
// Добавление шампанского в массив меню
module.exports.addChampagneInArray = (req, res, next) => {
  const { newElement } = req.body;

  FoodCardBar.findByIdAndUpdate(
    id,
    { $addToSet: { champagne: newElement } },
    { new: true }
  ).then((data) => res.send(data));
};
// Добавление вермута в массив меню
module.exports.addVermouthInArray = (req, res, next) => {
  const { newElement } = req.body;

  FoodCardBar.findByIdAndUpdate(
    id,
    { $addToSet: { vermouth: newElement } },
    { new: true }
  ).then((data) => res.send(data));
};
// Добавление аперативов в массив меню
module.exports.addAperativesInArray = (req, res, next) => {
  const { newElement } = req.body;

  FoodCardBar.findByIdAndUpdate(
    id,
    { $addToSet: { aperatives: newElement } },
    { new: true }
  ).then((data) => res.send(data));
};
// Добавление рома в массив меню
module.exports.addRumInArray = (req, res, next) => {
  const { newElement } = req.body;

  FoodCardBar.findByIdAndUpdate(
    id,
    { $addToSet: { rum: newElement } },
    { new: true }
  ).then((data) => res.send(data));
};
// Добавление cognac в массив меню
module.exports.addCognacInArray = (req, res, next) => {
  const { newElement } = req.body;

  FoodCardBar.findByIdAndUpdate(
    id,
    { $addToSet: { cognac: newElement } },
    { new: true }
  ).then((data) => res.send(data));
};
// Добавление brandy в массив меню
module.exports.addBrandyInArray = (req, res, next) => {
  const { newElement } = req.body;

  FoodCardBar.findByIdAndUpdate(
    id,
    { $addToSet: { brandy: newElement } },
    { new: true }
  ).then((data) => res.send(data));
};
// Добавление whiskey в массив меню
module.exports.addWhiskeyInArray = (req, res, next) => {
  const { newElement } = req.body;

  FoodCardBar.findByIdAndUpdate(
    id,
    { $addToSet: { whiskey: newElement } },
    { new: true }
  ).then((data) => res.send(data));
};
// Добавление gin в массив меню
module.exports.addGinInArray = (req, res, next) => {
  const { newElement } = req.body;

  FoodCardBar.findByIdAndUpdate(
    id,
    { $addToSet: { gin: newElement } },
    { new: true }
  ).then((data) => res.send(data));
};
// Добавление tequila в массив меню
module.exports.addTequilaInArray = (req, res, next) => {
  const { newElement } = req.body;

  FoodCardBar.findByIdAndUpdate(
    id,
    { $addToSet: { tequila: newElement } },
    { new: true }
  ).then((data) => res.send(data));
};
// Добавление tinctures в массив меню
module.exports.addTincturesInArray = (req, res, next) => {
  const { newElement } = req.body;

  FoodCardBar.findByIdAndUpdate(
    id,
    { $addToSet: { tinctures: newElement } },
    { new: true }
  ).then((data) => res.send(data));
};
// Добавление vodka в массив меню
module.exports.addVodkaInArray = (req, res, next) => {
  const { newElement } = req.body;

  FoodCardBar.findByIdAndUpdate(
    id,
    { $addToSet: { vodka: newElement } },
    { new: true }
  ).then((data) => res.send(data));
};
// Добавление liqueurs в массив меню
module.exports.addLiqueursInArray = (req, res, next) => {
  const { newElement } = req.body;

  FoodCardBar.findByIdAndUpdate(
    id,
    { $addToSet: { liqueurs: newElement } },
    { new: true }
  ).then((data) => res.send(data));
};

// Удаление cigarettes в массив меню
module.exports.deleteCigarettesInArray = (req, res, next) => {
  const { index } = req.body;
  FoodCardBar.findById(id)
    .orFail(() => {
      throw new NotFoundError('Передан невалидный id пользователя');
    })
    .then((data) => {
      FoodCardBar.findByIdAndUpdate(
        id,
        { $pull: { cigarettes: data.cigarettes[index] } },
        { new: true }
      ).then((data) => res.send(data));
    });
};
// Удаление cigarettes в массив меню
module.exports.deleteHookahsInArray = (req, res, next) => {
  const { index } = req.body;
  FoodCardBar.findById(id)
    .orFail(() => {
      throw new NotFoundError('Передан невалидный id пользователя');
    })
    .then((data) => {
      FoodCardBar.findByIdAndUpdate(
        id,
        { $pull: { hookahs: data.hookahs[index] } },
        { new: true }
      ).then((data) => res.send(data));
    });
};
// Удаление juice в массив меню
module.exports.deleteJuiceInArray = (req, res, next) => {
  const { index } = req.body;
  FoodCardBar.findById(id)
    .orFail(() => {
      throw new NotFoundError('Передан невалидный id пользователя');
    })
    .then((data) => {
      FoodCardBar.findByIdAndUpdate(
        id,
        { $pull: { juice: data.juice[index] } },
        { new: true }
      ).then((data) => res.send(data));
    });
};
// Удаление coffee в массив меню
module.exports.deleteCoffeeInArray = (req, res, next) => {
  const { index } = req.body;
  FoodCardBar.findById(id)
    .orFail(() => {
      throw new NotFoundError('Передан невалидный id пользователя');
    })
    .then((data) => {
      FoodCardBar.findById(id)
        .orFail(() => {
          throw new NotFoundError('Передан невалидный id пользователя');
        })
        .then((data) => {
          FoodCardBar.findByIdAndUpdate(
            id,
            { $pull: { coffee: data.coffee[index] } },
            { new: true }
          ).then((data) => res.send(data));
        });
    });
};
// Удаление tea в массив меню
module.exports.deleteTeaInArray = (req, res, next) => {
  const { index } = req.body;
  FoodCardBar.findById(id)
    .orFail(() => {
      throw new NotFoundError('Передан невалидный id пользователя');
    })
    .then((data) => {
      FoodCardBar.findByIdAndUpdate(
        id,
        { $pull: { tea: data.tea[index] } },
        { new: true }
      ).then((data) => res.send(data));
    });
};

// Удаление bottledBeer в массив меню
module.exports.deleteBottledBeerInArray = (req, res, next) => {
  const { index } = req.body;
  FoodCardBar.findById(id)
    .orFail(() => {
      throw new NotFoundError('Передан невалидный id пользователя');
    })
    .then((data) => {
      FoodCardBar.findByIdAndUpdate(
        id,
        { $pull: { bottledBeer: data.bottledBeer[index] } },
        { new: true }
      ).then((data) => res.send(data));
    });
};
// Удаление wine в массив меню
module.exports.deleteWineInArray = (req, res, next) => {
  const { index } = req.body;
  FoodCardBar.findById(id)
    .orFail(() => {
      throw new NotFoundError('Передан невалидный id пользователя');
    })
    .then((data) => {
      FoodCardBar.findByIdAndUpdate(
        id,
        { $pull: { wine: data.wine[index] } },
        { new: true }
      ).then((data) => res.send(data));
    });
};
// Удаление champagne в массив меню
module.exports.deleteChampagneInArray = (req, res, next) => {
  const { index } = req.body;
  FoodCardBar.findById(id)
    .orFail(() => {
      throw new NotFoundError('Передан невалидный id пользователя');
    })
    .then((data) => {
      FoodCardBar.findByIdAndUpdate(
        id,
        { $pull: { champagne: data.champagne[index] } },
        { new: true }
      ).then((data) => res.send(data));
    });
};
// Удаление vermouth в массив меню
module.exports.deleteVermouthInArray = (req, res, next) => {
  const { index } = req.body;
  FoodCardBar.findById(id)
    .orFail(() => {
      throw new NotFoundError('Передан невалидный id пользователя');
    })
    .then((data) => {
      FoodCardBar.findByIdAndUpdate(
        id,
        { $pull: { vermouth: data.vermouth[index] } },
        { new: true }
      ).then((data) => res.send(data));
    });
};
// Удаление aperatives в массив меню
module.exports.deleteAperativesInArray = (req, res, next) => {
  const { index } = req.body;
  FoodCardBar.findById(id)
    .orFail(() => {
      throw new NotFoundError('Передан невалидный id пользователя');
    })
    .then((data) => {
      FoodCardBar.findByIdAndUpdate(
        id,
        { $pull: { aperatives: data.aperatives[index] } },
        { new: true }
      ).then((data) => res.send(data));
    });
};
// Удаление rum в массив меню
module.exports.deleteRumInArray = (req, res, next) => {
  const { index } = req.body;
  FoodCardBar.findById(id)
    .orFail(() => {
      throw new NotFoundError('Передан невалидный id пользователя');
    })
    .then((data) => {
      FoodCardBar.findByIdAndUpdate(
        id,
        { $pull: { rum: data.rum[index] } },
        { new: true }
      ).then((data) => res.send(data));
    });
};
// Удаление cognac в массив меню
module.exports.deleteCognachInArray = (req, res, next) => {
  const { index } = req.body;
  FoodCardBar.findById(id)
    .orFail(() => {
      throw new NotFoundError('Передан невалидный id пользователя');
    })
    .then((data) => {
      FoodCardBar.findByIdAndUpdate(
        id,
        { $pull: { cognac: data.cognac[index] } },
        { new: true }
      ).then((data) => res.send(data));
    });
};
// Удаление brandy в массив меню
module.exports.deleteBrandyInArray = (req, res, next) => {
  const { index } = req.body;
  FoodCardBar.findById(id)
    .orFail(() => {
      throw new NotFoundError('Передан невалидный id пользователя');
    })
    .then((data) => {
      FoodCardBar.findByIdAndUpdate(
        id,
        { $pull: { brandy: data.brandy[index] } },
        { new: true }
      ).then((data) => res.send(data));
    });
};
// Удаление whiskey в массив меню
module.exports.deleteWhiskeyInArray = (req, res, next) => {
  const { index } = req.body;
  FoodCardBar.findById(id)
    .orFail(() => {
      throw new NotFoundError('Передан невалидный id пользователя');
    })
    .then((data) => {
      FoodCardBar.findByIdAndUpdate(
        id,
        { $pull: { whiskey: data.whiskey[index] } },
        { new: true }
      ).then((data) => res.send(data));
    });
};
// Удаление gin в массив меню
module.exports.deleteGinInArray = (req, res, next) => {
  const { index } = req.body;
  FoodCardBar.findById(id)
    .orFail(() => {
      throw new NotFoundError('Передан невалидный id пользователя');
    })
    .then((data) => {
      FoodCardBar.findByIdAndUpdate(
        id,
        { $pull: { gin: data.gin[index] } },
        { new: true }
      ).then((data) => res.send(data));
    });
};
// Удаление tequila в массив меню
module.exports.deleteTequilaInArray = (req, res, next) => {
  const { index } = req.body;
  FoodCardBar.findById(id)
    .orFail(() => {
      throw new NotFoundError('Передан невалидный id пользователя');
    })
    .then((data) => {
      FoodCardBar.findByIdAndUpdate(
        id,
        { $pull: { tequila: data.tequila[index] } },
        { new: true }
      ).then((data) => res.send(data));
    });
};
// Удаление tinctures в массив меню
module.exports.deleteTincturesInArray = (req, res, next) => {
  const { index } = req.body;
  FoodCardBar.findById(id)
    .orFail(() => {
      throw new NotFoundError('Передан невалидный id пользователя');
    })
    .then((data) => {
      FoodCardBar.findByIdAndUpdate(
        id,
        { $pull: { tinctures: data.tinctures[index] } },
        { new: true }
      ).then((data) => res.send(data));
    });
};
// Удаление  vodka в массив меню
module.exports.deleteVodkaInArray = (req, res, next) => {
  const { index } = req.body;
  FoodCardBar.findById(id)
    .orFail(() => {
      throw new NotFoundError('Передан невалидный id пользователя');
    })
    .then((data) => {
      FoodCardBar.findByIdAndUpdate(
        id,
        { $pull: { vodka: data.vodka[index] } },
        { new: true }
      ).then((data) => res.send(data));
    });
};
// Удаление liqueurs в массив меню
module.exports.deleteLiqueursInArray = (req, res, next) => {
  const { index } = req.body;
  FoodCardBar.findById(id)
    .orFail(() => {
      throw new NotFoundError('Передан невалидный id пользователя');
    })
    .then((data) => {
      FoodCardBar.findByIdAndUpdate(
        id,
        { $pull: { vermouth: data.vermouth[index] } },
        { new: true }
      ).then((data) => res.send(data));
    });
};
