const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const {
  addPositionInReceipt,
  changePrice,
  createReceipt,
  getReceipts,
  clearReceipt,
  findMyReceipt,
} = require('../controllers/receipt');

const { urlRegExp } = require('../constants/constants');

router.get('/getReceipts', getReceipts);
router.get('/findMyReceipt/:id', findMyReceipt);
router.post('/createReceipt', createReceipt);
router.post('/addPositionInReceipt/:id', addPositionInReceipt);
router.post('/changePrice/:id', changePrice);
router.delete('/clearReceipt/:id', clearReceipt);
module.exports = router;
