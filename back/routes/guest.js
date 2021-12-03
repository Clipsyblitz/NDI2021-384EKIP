const express = require("express");
const { body, sanitize } = require("express-validator");

const router = express.Router();

const guestController = require("../controllers/guest");

router.get("/getRescueReport", guestController.getRescueReport);
router.get("/getSeaTrip/:seaTripId", guestController.getSeaTripById);

module.exports = router;
