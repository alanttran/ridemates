const path = require("path");
const router = require('express').Router();

const sendHTML = (res, filePath) => res.sendFile(path.join(__dirname, filePath));

router.get("/", (req, res) => sendHTML(res, "../public/index.html"));

router.get("/signup", (req, res) => sendHTML(res, "../public/signup.html"));

router.get("/login", (req, res) => sendHTML(res, "../public/login.html"));

// router.get("/list", (req, res) => sendHTML(res, "../public/list.html"));

module.exports = router;