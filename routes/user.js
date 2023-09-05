const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth");
const { 
  LOGIN,
  SIGNUP,
  GET_USER_BY_ID,
} = require("../controllers/user");

router.post("/signUp", SIGNUP);
router.post("/logIn", LOGIN);



module.exports = router;