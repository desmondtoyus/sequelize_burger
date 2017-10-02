var db = require("../models");
module.exports = function (app) {
    app.get('/api/burgers/', function (req, res) {
        db.burgers.findAll({}).then(function (data) {
            res.json(data);

        })

    })

    app.post('/api/burgers/', function (req, res) {
        db.burgers.create({
            name: req.body.name,
            devoured: req.body.devoured

        }).then(function (data) {
            res.json(data);
        })

    })
    app.put('/api/burgers/:id', function (req, res) {
        db.burgers.update({
            devoured: true
        }, {
            where: {
                id: req.params.id
            }
        }).then(function (data) {
            res.json(data);

        })

    })
}