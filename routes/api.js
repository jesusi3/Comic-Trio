var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

const rootURL = 'https://api.mangadex.org/';
const token = process.env.GITHUB_TOKEN;

router.get('/', async function(req, res){
  const response = await fetch(`${rootURL}manga` , {method: 'GET'});
  const five = await response.json();
  // console.log(data)
  const mangas = five.data;
  res.render('index' , {mangas})
})


  
module.exports = router;