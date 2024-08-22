const express = require("express");
const {
  signup,
  login,
  updateUser,
  getUser,
} = require("../controllers/authController");
const auth = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/update", auth, updateUser);
router.get("/me", auth, getUser);

module.exports = router;
