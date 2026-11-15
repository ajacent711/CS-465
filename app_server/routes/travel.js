var express = require('express');
var router = express.Router();

// Import the traveler controller
const travelerController = require('../controllers/traveler');

// Route for the travel page
router.get('/', travelerController.travel);

module.exports = router;
