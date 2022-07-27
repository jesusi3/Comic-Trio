var express = require('express');
var router = express.Router();

const fetch = require('node-fetch');

const rootURL = 'https://api.mangadex.org/';
const token = process.env.GITHUB_TOKEN;
//Path starts with 
router.get('/', async function(req, res){
  res.render('index')
})

  
module.exports = router;