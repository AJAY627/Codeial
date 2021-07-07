const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');

console.log("router loaded");
router.get('/',homeController.home);
router.use('/users', require('./users'));



//for any further routes, acces from here
// router.user('/routerName', require('./routerFile))
module.exports = router;