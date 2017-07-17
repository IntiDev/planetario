var express = require ('express');
var app = express();

app.use('/data', express.static(__dirname + '/data'));
app.use('/static', express.static(__dirname + '/node_modules'));
app.use('/static', express.static(__dirname + '/assets'));

app.get('/', function (require, response) {
	response.sendFile(__dirname + '/planetas.html');
});

app.listen(5000);
