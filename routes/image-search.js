var express = require('express');
var router = express.Router();

router.get('/latest', function(req, res, next) {
    res.send('latest');
});

router.get('/:searchstring', function(req, res, next) {
    res.send(req.params.searchstring + ' ' + req.query.offset);
});

module.exports = router;