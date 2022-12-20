const { request } = require('express');
const express = require('express');
const app = express();

app.listen(8080, function(){
    console.log('listening on 8080');
});

app.get('/index.html', function(request, response){
    response.sendFile(__dirname + '/index.html');
});
app.get('/1.html', function(request, response){
    response.sendFile(__dirname + '/1.html');
});
app.get('/2.html', function(request, response){
    response.sendFile(__dirname + '/2.html');
});
app.get('/3.html', function(request, response){
    response.sendFile(__dirname + '/3.html');
});