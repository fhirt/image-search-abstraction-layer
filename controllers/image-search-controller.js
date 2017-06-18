const ImageSearchModel = require('../models/image-search-model');

exports.latest = function(req, res, next) {
    ImageSearchModel.find({}, {'_id':0, 'term':1, 'when':1}, function(err, result) {
        if (err) throw err;
        res.send(result.slice(-10).reverse());
    });
};

exports.newSearch = function(req, res, next) {
    var searchString = req.params.searchstring;
    var offset = req.query.offset;
    
    var newSearch = new ImageSearchModel({
       term: searchString,
       when: new Date()
    });
    
    newSearch.save(function(err) {
        if (err) throw err;
        res.send(searchString + ' ' + offset);
    });
};