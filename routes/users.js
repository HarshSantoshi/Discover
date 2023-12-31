const express = require('express');
const router = express.Router();
const passport = require('passport');
const userController = require('../controllers/user_controller')

router.get('/profile' , passport.checkAuthentication , userController.profile)


router.get('/signup',userController.signUp);
router.get('/signin', userController.signIn);
router.post('/create', userController.create)
//using passport as a middleware to authenticate
router.post('/create-session' , passport.authenticate(
    'local',
    {
        failureRedirect : '/users/signin'
    },
) , userController.createSession)

router.get('/logout', userController.destroySession);
module.exports = router;