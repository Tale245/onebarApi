const { download, downloadOne } = require('../controllers/download');

const router = require('express').Router();

router.post('/downloadOne', downloadOne)
module.exports = router;
