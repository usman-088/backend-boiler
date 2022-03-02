var express = require('express');
var router = express.Router();
var userCont = require('../controllers/users')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup',userCont.signupUsers)
router.get('/login',userCont.loginUsers)

module.exports = router;
