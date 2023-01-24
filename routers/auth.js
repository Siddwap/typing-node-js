const router = require('express').Router();
const authController = require('../controller/auth')

router.post('/login', authController.loginController);
router.post('/signup', authController.signupController);

module.exports = router;