var path = require('path');
module.exports = function (app) {
    app.get('/css', function (req, res) {
        res.sendFile(path.join(__dirname, "../public/css/burger_style.css"))

    })

}