var express = require('express');
var router = express.Router();



var model = {
  title: "Site with a simple joke api",
  howToUse: "get a random joke like this: /api/random"
}


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',model);
});

module.exports = router;
