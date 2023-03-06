const express = require("express");
const userController = require("../controllers/authController");
const router = express.Router();

router.post("/login", userController.User_Login);
router.post("/signup", userController.User_signup);
module.exports = router;
