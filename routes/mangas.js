var express = require('express');
var router = express.Router();
const mangasCtrl = require('../controllers/mangas');

/* GET users listing. */
router.get('/', mangasCtrl.index});

module.exports = router;
