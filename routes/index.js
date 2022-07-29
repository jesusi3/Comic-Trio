var express = require('express');
var router = express.Router();
const passport = require('passport');


// const fetch = require('node-fetch');
// const token = process.env.GITHUB_TOKEN;

// const rootURL = 'https://api.mangadex.org/'
// router.get('/', function(req, res, next) {
//     const titleM = req.query.data.title;
//     const options ={
//         headers: {
//           Authorization: `token ${token}`
//         }
//       }
//       fetch(`${rootURL}manga/random?includes%5B%5D=string&contentRating%5B%5D=safe&contentRating%5B%5D=suggestive&contentRating%5B%5D=erotica`, options)
//       .then(res => res.json())
//       .then(res => console.log(res))
// });

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Comic-Trio' });
});

router.get('/auth/google', passport.authenticate(
  'google',
  {
    scope: ['profile', 'email'],
    // Optionally force the user to pick account every time
    prompt: 'select_account'
  }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/mangas/home',
    failureRedirect: '/'
  }
));

// Logout route
router.get('/logout', function (req, res) {
  req.logout(function (err) {
    res.redirect('/');
  });
});

module.exports = router;
