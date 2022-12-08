const express = require('express');
const path = require('path');

// setting
const PORT = process.env.PORT || 8000;
const HOST = '0.0.0.0';

// app
const app = express();
const indexHtml = path.join(__dirname, 'dist', 'index.html') 

app.use(express.static(__dirname + '/dist'));


app.get('/*', (_, res) => {
    res.sendFile(indexHtml);
});

// listen
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);