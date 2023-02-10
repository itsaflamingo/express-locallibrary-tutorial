var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/cool', function(req, res, next) {
    res.render('users', { description: 'Cool' });
  });


module.exports = router;
