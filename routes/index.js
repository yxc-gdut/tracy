var express = require('express');
var api = require('../src/api');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'THEMIS 瑞美斯', selected:'index' });
});

router.get('/product', function(req, res, next) {
  res.render('product', { title: 'THEMIS 瑞美斯', selected:'product' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'THEMIS 瑞美斯', selected:'about' });
});

router.get('/advantage', function(req, res, next) {
  res.render('advantage', { title: 'THEMIS 瑞美斯', selected:'advantage' });
});

router.get('/join', function(req, res, next) {
  res.render('join', { title: 'THEMIS 瑞美斯', selected:'join' });
});

router.get('/online', function(req, res, next) {
  res.render('online', { title: 'THEMIS 瑞美斯', selected:'online' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'THEMIS 瑞美斯', selected:'contact' });
});

router.post('/api/*', function(req, res, next) {
  api.main(req, res, next);
});

module.exports = router;
