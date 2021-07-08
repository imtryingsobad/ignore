const router = require('express').Router();
const userController = require('../controllers/user');
const authenticate = require('../middleware/authenticate');


router
  .post('/register', userController.register)
  .post('/signin', userController.signIn)
  .get('/about',authenticate,userController.about)

module.exports = router;
