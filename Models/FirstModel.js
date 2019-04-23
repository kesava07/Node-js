const mongoose = require('mongoose'),
    schema = mongoose.Schema,
    chenna = new schema({
        name: { type: String },
        age: { type: Number }
    }),
    getData = mongoose.model("sampleData", chenna)

function firstModel() {
    
};

firstModel.prototype.getAll = function (params, callback) {
    getData.find(params.source, function (err, data) {
        if (err) {
            callback(err, null)
        } else {
            callback(null, data)
        }
    })
};


firstModel.prototype.create = function (data, callback) {
    getData.create(data, function (err, res) {
        if (err) {
            callback(err, null)
        } else {
            callback(null, res)
        }
    })
};

firstModel.prototype.remove = function (id, callback) {
    getData.remove({ _id: id }, function (err, data) {
        if (err) {
            callback(err, null)
        } else {
            callback(null, data)
        }
    })
};

firstModel.prototype.update = function (id, data, callback) {
    getData.update({ _id: id }, data, function (err, res) {
        if (err) {
            callback(err, null)
        } else {
            callback(null, res)
        }
    })
};

firstModel.prototype.getById = function (id, callback) {
    getData.findOne({ _id: id }, function (err, res) {
        if (err) {
            callback(err, null)
        } else {
            callback(null, res)
        }
    })
};

module.exports = firstModel;