const ImageSearchModel = require('../models/image-search-model');
const imageSearch = require('node-google-image-search');

exports.latest = function(req, res, next) {
    ImageSearchModel.find({}, {'_id':0, 'term':1, 'when':1}, function(err, result) {
        if (err) throw err;
        res.send(result.slice(-10).reverse());
    });
};

exports.newSearch = function(req, res, next) {
    var searchString = req.params.searchstring;
    var offset = req.query.offset || 0;
    
    var newSearch = new ImageSearchModel({
       term: searchString,
       when: new Date()
    });
    
    newSearch.save(function(err) {
        if (err) throw err;
        imageSearch(searchString, function(results) {
            var cleanResults = [];
            results.map(function(result) {
                cleanResults.push({
                    "url": result.link,
                    "snippet": result.snippet,
                    "thumbnail": result.image.thumbnailLink,
                    "context": result.image.contextLink
                });
            });
            res.send(cleanResults);
        }, offset, 10);
    });
};