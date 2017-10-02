var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('./models');
var port = process.env.PORT || 8080;
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));

require('./routes/htmlroutes')(app);
require('./routes/apiroutes')(app);
db.sequelize.sync().then(function () {
    app.listen(port, function () {
        console.log('listening at localhost:', port);
    })
})