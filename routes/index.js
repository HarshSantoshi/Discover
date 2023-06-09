const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller')

router.get('/' , homeController.home)
router.use('/users' , require('./users'))

//for any further routes
//router.use('/routerName' , require('routerFile') );

console.log("The router is loaded");

module.exports = router;