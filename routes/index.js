const express = require('express');
const router = express.Router();
const User = require('../models/user');

// GET /profile
router.get('/profile', (req, res, next) =>{
  if (! req.session.userId){
    res.redirect('/login');
  }
  User.findById(req.session.userId)
      .exec(function (error, user){
        if (error){
          return next(error);
        } else {
          return res.render('profile', {title: 'Profile', gamertag: user.gamertag});
        }
      })
});

// GET /login
router.get('/login', (req, res, next) => {
  return res.render('login', {title: 'Log In'});
});

// POST /login
router.post('/login', (req, res, next) => {
  if(req.body.gamertag && req.body.password){
      User.authenticate(req.body.gamertag, req.body.password, function(error, user){
        //??
        if(error || !user){ 
          const err = new Error('Wrong email or password'); 
          err.status = 401;
          next(err);
        }
        req.session.userId = user._id;
        return res.redirect('/profile');
      });
    } else {
      const err = new Error('Email and password required');
      err.status = 401;
      return next(err);
    }
})

// GET /logout
router.get('/logout', (req, res, next) => {
  if (req.session) {
    //delete session
    req.session.destroy(function(err){
      if (err){
        return next(err);
      } else {
        return res.redirect('/');
      }
    });
  }
})

// GET /register
router.get('/register', (req, res, next) => {
  return res.render('register', { title: 'Sign Up'});
});

// POST /register
router.post('/register', (req, res, next) => {
  if (req.body.gamertag &&
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
        gamertag: req.body.gamertag,
        password: req.body.password
      };

      //inser document into mongo
      User.create(userData, function(error, user){
        if (error) {
          return next(error)
        } else {
          req.session.userId = user._id;
          return res.redirect('/profile');
        }
      });

  } else {
    const err = new Error('All fields required');
    err.status = 400;
    return next(err);
  }
});

// GET /
router.get('/', function(req, res, next) {
  return res.render('index', { title: 'Home' });
});

// GET /multiplayer
router.get('/multiplayer', (req, res, next) => {
  if (! req.session.userId){
    res.redirect('/login');
  } else {
    res.send(`Online Multiplayer`);
  }
});

// GET /about
router.get('/about', function(req, res, next) {
  return res.render('about', { title: 'About' });
});

// GET /contact
router.get('/contact', function(req, res, next) {
  return res.render('contact', { title: 'Contact' });
});

module.exports = router;
