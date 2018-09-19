const express = require('express');
const router = express.Router();
const User = require('../models/user');

// GET /register
router.get('/register', (req, res, next) => {
  return res.render('register', { title: 'Sign Up'});
})

// POST /register
router.post('/register', (req, res, next) => {
  if (req.body.name &&
    req.body.email &&
    req.body.password &&
    req.body.confirmPassword){

      if (req.body.password !== req.body.confirmPassword){
        const err = Error('Passwords do not match');
        err.status = 400;
        return next(err);
      }

      //create object with form input
      const userData = {
        email: req.body.email,
        name: req.body.name,
        password: req.body.password
      };

      //inser document into mongo
      User.create(userData, function(error, user){
        if (error) {
          return next(error)
        } else {
          return res.redirect('/profile');
        }
      });

  } else {
    const err = new Error('All fields required');
    err.status = 400;
    return next(err);
  }
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
