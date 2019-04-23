const express = require('express'), router = express.Router(),
firstContoller = require("../Controllers/FirstController"),
FC = new firstContoller();

router.get("/", FC.getAll.bind(FC));
router.post("/", FC.create.bind(FC));
router.delete("/:id", FC.remove.bind(FC));
router.put("/:id", FC.update.bind(FC));
router.get("/:id", FC.getById.bind(FC));

module.exports = router;