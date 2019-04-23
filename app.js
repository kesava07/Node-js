const express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    bodyParser = require("body-parser");

mongoose.connect("mongodb://localhost:27017/test");

app.use(bodyParser.json());

app.use("/", require('./Router'));

app.listen(5500);