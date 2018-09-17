var express = require('express');
var router = express.Router();

// GET /register
router.get('/register', (req, res, next) => {
  return res.render('register', { title: 'Sign Up'});
})

// POST /register
router.post('/register', (req, res, next) => {
  return res.send('Registration recived')
})

// GET /
router.get('/', function(req, res, next) {
  return res.render('index', { title: 'Home' });
});

// GET /multiplayer
router.get('/multiplayer', (req, res, next) => {
  res.redirect(`/register`);
})

// GET /about
router.get('/about', function(req, res, next) {
  return res.render('about', { title: 'About' });
});

// GET /contact
router.get('/contact', function(req, res, next) {
  return res.render('contact', { title: 'Contact' });
});

module.exports = router;
