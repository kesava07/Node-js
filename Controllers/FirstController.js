const firstModel = require('../Models/FirstModel'),
    FM = new firstModel();

function firstController() {

};

firstController.prototype.getAll = function (req, res) {
    FM.getAll(req.query, function (err, data) {
        if (err) {
            res.send(err)
        }
        else {
            res.send(data)
        }
    })
};

firstController.prototype.create = function (req, res) {
    FM.create(req.body, function (err, data) {
        if (err) {
            res.send(err)
        }
        else {
            res.send(data)
        }
    })
};

firstController.prototype.remove = function (req, res) {
    FM.remove(req.params.id, function (err, data) {
        if (err) {
            res.send(err)
        }
        else {
            res.send(data)
        }
    })
};

firstController.prototype.update = function (req, res) {
    FM.update(req.params.id, req.body, function (err, data) {
        if (err) {
            res.send(err)
        }
        else {
            res.send(data)
        }
    })
};

firstController.prototype.getById = function (req, res) {
    FM.getById(req.params.id, function (err, data) {
        if (err) {
            res.send(err)
        }
        else {
            res.send(data)
        }
    })
};

module.exports = firstController;