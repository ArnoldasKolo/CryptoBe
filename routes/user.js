const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth");
const { 
  LOGIN,
  SIGNUP,

} = require("../controllers/user");

router.post("/signUp", SIGNUP);
router.post("/logIn", LOGIN);



module.exports = router;