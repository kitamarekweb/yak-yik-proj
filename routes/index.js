var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET createZone page. */
router.get('/createzone', function(req, res, next) {
  res.render('createzone', null);
});

module.exports = router;
