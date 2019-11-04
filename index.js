let express = require("express");
let bodyParser = require("body-parser");
var cookieParser = require('cookie-parser')

let app;

app = express();

app.use(cookieParser())
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

let greetings = ['Hello', 'Hey', 'Hi'];
app.get('/hello', (_, res) => {
    let i = Math.floor(Math.random() * 3);
    return res.end(greetings[i]);
});

app.get('/calculate', (req, res) => {
    let a = req.query.a;
    let b = req.query.b;
    let symbol = req.query.symbol;
    let result;
    switch(symbol) {
        case 'plus':
            result = parseFloat(a) + parseFloat(b);
            return res.end(result.toString());
        case 'minus':
            result = parseFloat(a) - parseFloat(b);
            return res.end(result.toString());
        case 'divide':
            result = parseFloat(a) / parseFloat(b);
            return res.end(result.toString());
        case 'multiply':
            result = parseFloat(a) * parseFloat(b);
            return res.end(result.toString());
        default:
            return res.status(400).end();
      }
});

// Run server
module.exports = app.listen(80, function() {
    console.log('Website running');
});