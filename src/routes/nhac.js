const express = require("express");
const router = express.Router();

const nhacControllers = require("../app/controllers/NhacControllers")

router.get("/newnhac", nhacControllers.newnhac)
router.post("/store", nhacControllers.store)
router.get("/:id/edit", nhacControllers.edit)
router.put("/:id", nhacControllers.update)


router.get("/:slug", nhacControllers.show);

module.exports = router;
 