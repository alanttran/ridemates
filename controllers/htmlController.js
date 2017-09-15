const path = require("path");
const router = require('express').Router();

const sendHTML = (res, filePath) => res.sendFile(path.join(__dirname, filePath));

console.log('in htmlcontroller')

router.get("/", (req, res) => sendHTML(res, "../public/index.html"));

router.get("/signup", (req, res) => sendHTML(res, "../public/signup.html"));

router.get("/login", (req, res) => sendHTML(res, "../public/login.html"));

router.get("/request", (req, res) => sendHTML(res, "../public/request.html"));

module.exports = router;