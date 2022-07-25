var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

const rootURL = 'https://api.mangadex.org/';
const token = process.env.GITHUB_TOKEN;

// router.get('/', function(req, res, next) {
//   // const options ={
//   //   headers: {
//   //     Authorization: `token ${token}`
//   //   }
//   // const title =  req.query.title
//   fetch(`${rootURL}manga/`)
//   .then(res => res.json())
//   .then(data =>
//     console.log(data)
//     // res.render('index', {  data })
//     )
// });

router.get('/', fetch(`${rootURL}manga/`)
.then(res => res.json())
.then(data =>
  console.log(data)
  // res.render('index', {  data })
  ))
  
module.exports = router;