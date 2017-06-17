var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ImageSearchModel = Schema({
    term: {type: String, required: true},
    when: {type: Date, required: true}
});

module.exports = mongoose.model('ImageSearch', ImageSearchModel);
