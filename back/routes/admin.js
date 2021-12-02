const express = require("express");
const { body, sanitize } = require("express-validator");

const router = express.Router();

const adminController = require("../controllers/admin");
const Admin = require("../models/admin");

router.post("/login", adminController.postLogin);

module.exports = router;
