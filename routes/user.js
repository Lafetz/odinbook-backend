const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router.post("/request", userController.User_Request);
router.post("/reject", userController.User_Reject);
router.post("/accept", userController.User_Accept);
router.post("/remove", userController.User_Remove);
module.exports = router;
//
