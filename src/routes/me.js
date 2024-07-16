const express = require("express");
const router = express.Router();

const MeControllers = require("../app/controllers/MeControllers");

router.get('/stored/nhacs', MeControllers.storedNhac);

module.exports = router;
