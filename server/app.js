const express = require('express');
const path = require('path');

const app = express();
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.send("Hello World! I've made a change to the server code....");
})

app.get('/arena', function(req, res) {
    res.sendFile(path.resolve(__dirname, '../public/arenaTracker.html'));
})
module.exports = app;