var express = require('express');
var router = express.Router();
const mangasCtrl = require('../controllers/mangas');
const isLoggedIn = require('../config/auth');
/* GET users listing. */

//PATH start witch /mangas
router.get('/', mangasCtrl.index);
router.get('/home', mangasCtrl.home);
router.get('/:id', isLoggedIn, mangasCtrl.show);
router.post('/', isLoggedIn, mangasCtrl.create);
router.delete('/:id', mangasCtrl.delete);

module.exports = router;
