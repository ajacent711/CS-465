var express = require('express');
var router = express.Router();

// Import the main controller
const mainController = require('../controllers/main');

// Route for the homepage
router.get('/', mainController.index);

module.exports = router;
