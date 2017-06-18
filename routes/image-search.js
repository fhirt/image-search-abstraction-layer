const express = require('express');
const router = express.Router();
const path = require('path');
const imageSearchController = require('../controllers/image-search-controller');

router.get('/', function(req, res, next) { 
    res.sendFile(path.join(__dirname, '../index.html')); 
});

router.get('/latest', imageSearchController.latest);

router.get('/:searchstring', imageSearchController.newSearch);

module.exports = router;