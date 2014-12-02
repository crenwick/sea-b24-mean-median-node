'use strict';

var express = require('express');
var app = express();
var bodyparser = require('body-parser');

app.use(bodyparser.json());
app.use(express.static(__dirname + '/public'));

require('./routes/calc')(app);

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
  console.log('server running on', app.get('port'));
});
