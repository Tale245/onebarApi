const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const { getUsersInfo, updateUserInfo, updateUserAvatars, getMyInfo } = require('../controllers/user');

const { urlRegExp } = require('../constants/constants');


router.get('/users', getUsersInfo);
router.get('/users/me', getMyInfo);
router.patch('/users/me', celebrate({
    body: Joi.object().keys({
        firstName: Joi.string().min(1).max(30),
        secondName: Joi.string().min(1).max(30),
        about: Joi.string().min(1).max(300)
    })
}), updateUserInfo);
router.patch('/users/me/avatars', celebrate({
    body: Joi.object().keys({
        firstAvatar: Joi.string().pattern(urlRegExp),
        secondAvatar: Joi.string().pattern(urlRegExp),
        thirdAvatar: Joi.string().pattern(urlRegExp),
        fourthAvatar: Joi.string().pattern(urlRegExp),
    })
}), updateUserAvatars);

module.exports = router;
