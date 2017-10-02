var express = require('express');
var api = require('../src/api');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'THEMIS 瑞美斯', selected:'index' });
});

router.post('/api/*', function(req, res, next) {
  api.main(req, res, next);
});

module.exports = router;
