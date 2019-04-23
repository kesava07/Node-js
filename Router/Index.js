const express = require('express'),router = express.Router();

    router.get("/", function (req, res) {
    res.send("Hello chenna kesava welcome to node app router")
})
router.use('/v1', require('./Router'));


module.exports = router;