const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth");
const { 
  LOGIN,
  SIGNUP,
  GET_USER_BY_ID,
  GET_ALL_USERS_FOLLOWS,
  UPDATE_USER,
} = require("../controllers/user");

router.post("/signUp", SIGNUP);
router.post("/logIn", LOGIN);
router.get("/user/:id", GET_USER_BY_ID);


module.exports = router;