const express = require("express");
const { body, sanitize } = require("express-validator");

const router = express.Router();

const guestController = require("../controllers/guest");

router.get("/getRescueReport/:century", guestController.getRescueReport);
router.get("/getSeaTrip/:seaTripId", guestController.getSeaTripById);
router.get("/getBoat/:boatId", guestController.getBoatById);
router.get("/search/:type/:data", guestController.getSearch);



module.exports = router;
