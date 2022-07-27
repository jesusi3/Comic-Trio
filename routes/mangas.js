var express = require('express');
var router = express.Router();
const mangasCtrl = require('../controllers/mangas');
const isLoggedIn = require('../config/auth');
/* GET users listing. */

//PATh start witch /mangas
router.get('/library', mangasCtrl.index);
router.post('/', isLoggedIn, mangasCtrl.create);
router.get('/home', mangasCtrl.home);
router.get('/:id', isLoggedIn, mangasCtrl.show);

module.exports = router;
