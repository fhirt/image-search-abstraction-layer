const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const imageSearch = require('./routes/image-search');

const PORT = process.env.PORT || 8080;
const DB = process.env.MONGODB_URI;

mongoose.connect(DB);

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
    res.redirect('/imagesearch/latest');
});

app.use('/imagesearch', imageSearch);

app.listen(PORT, function() {
    console.log('Example app listening on port ' + PORT);
});