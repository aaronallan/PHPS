var express = require('express')
  , join = require('path').join
  , fs = require('fs');

var app = express();


app.set('views', __dirname);

// load examples

var examples = fs.readdirSync(__dirname).filter(function(file){
  return fs.statSync(__dirname + '/' + file).isDirectory();
});
app.use(express.static(__dirname + '/assets')); 

app.get('/page.js', function(req, res){
  res.sendFile(join(__dirname, 'page.js'));
});

app.get('/', function(req, res){
  res.sendFile(join(__dirname, 'index.html'));
});

app.get('/:app/*', function(req, res){
  res.sendFile(join(__dirname, 'index.html'));
});

app.listen(4000);
console.log('Example server listening on port 4000');
