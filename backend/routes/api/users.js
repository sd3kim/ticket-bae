const express = require("express");
const router = express.Router();
const usersCtrl = require("../../controllers/users");
// router.use(require("../../config/auth"));
// POST /api/users/signup
router.post("/signup", usersCtrl.create);
// POST /api/users/login
router.post("/login", usersCtrl.login);

module.exports = router;
