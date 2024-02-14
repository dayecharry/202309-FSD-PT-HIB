
const express = require("express");
const { register, login, profile, getUsers } = require("../controllers/user.controllers")
const { authorized, isAdmin } = require("../../middleware/auth");

const router = express.Router()


router.post("/register", register)
router.post("/login", login)
router.get("/profile", [authorized], profile)
router.get("/allusers", [isAdmin], getUsers)

module.exports = router;