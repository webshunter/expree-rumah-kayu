require('dotenv').config();
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const path = require('path');

// Create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static('public'));

app.all('*', (req, res) => {
    return handle(req, res)
})

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.htm'));
});

app.get('/admin', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.htm'));
});

app.get('/produk/(:any)', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.htm'));
});

app.listen(3000, () => console.log('Server ready on port 3000.'));

module.exports = app;