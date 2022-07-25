var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

const rootURL = 'https://api.mangadex.org/';
const token = process.env.GITHUB_TOKEN;

router.get('/', async function(req, res){
  const response = await fetch(`${rootURL}manga` , {method: 'GET'});
  const five = await response.json();
  const mangas = five.data;
  console.log(mangas[0].relationships[3])
  // let cover_Art = req.query.relationships;
  // console.log(cover_Art);
  // const four = await fetch(`${rootURL}cover/${cover_Art}`, {method: 'GET'})
  // const two = await four.json();
  // const art = two.data;
  res.render('index' , {mangas})
})

// const response = await fetch(`${rootURL}manga` , {method: 'GET'});
//   const five = await response.json();
//   // console.log(data)
//   const mangas = five.data;
//   res.render('index' , {mangas})


  
module.exports = router;