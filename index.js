require('dotenv').config();

const express = require('express');
var cookieSession = require('cookie-session')

const app = express();

app.set('trust proxy', 1)

app.use(cookieSession({
    name: 'session',
    keys: ['jksbdjkanfaklnfnklafklamf'],
}))

const bodyParser = require('body-parser');
const path = require('path');

// Create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.htm'));
});

app.get('/cek-login', function (req, res) {
    res.json(req.session.login ? {status:true}:{status:false});
})


app.get('/admin', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.htm'));
});

app.get('/produk/(:any)', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.htm'));
});

app.listen(3024, () => console.log('Server ready on port 3000.'));

module.exports = app;