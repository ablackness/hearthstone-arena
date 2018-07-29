const express = require('express');

const app = express();
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.send("Hello World! I've made a change to the server code....");
})
module.exports = app;