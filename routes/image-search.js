var express = require('express');
var router = express.Router();
var imageSearchController = require('../controllers/image-search-controller');

router.get('/latest', imageSearchController.latest);

router.get('/:searchstring', imageSearchController.newSearch);

module.exports = router;