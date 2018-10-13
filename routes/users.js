var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/new', function(req, res, next) {
  res.send('New respond');
});

router.get('/newview', function(req, res, next) {
  res.render('newUser', { title:'user Infomaion', ID: '001', name: 'user1', Gender: 'Male' });
});

module.exports = router;
