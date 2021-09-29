let express = require('express');
let router = express.Router();

/* Home page */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* Home page */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* About Me page */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Me'});
});

/* Projects page */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects'});
});

/* Services page */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services'});
});

/* Contact Us page */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact Me'});
});

module.exports = router;
