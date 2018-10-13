var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/new', function(req, res, next) {
  res.render('index', { title: 'New' });
});

router.get('/newview', function(req, res, next) {
  res.render('newIndex', { title: 'HomePage', name: 'Index' });
});

module.exports = router;
