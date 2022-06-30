var express = require('express');
var ejs = require('ejs');
var path = require('path');
var app = express();
// set view engine to ejs
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));


// use res.render to load up an ejs view file
app.use( express.static( "public" ) );
app.use(express.static(__dirname + '/views'));

app.get('/', function(req, res) {
    res.render('index');
});



app.listen(process.env.PORT || 3000, function () {
  console.log('App listening on port 3000!');
});
