const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");



router.post("/", async (req, res) => {
    const { username, email, password } = req.body
    bcrypt.hash(password, 10).then((hash) => {
        Users.create({
            username: username,
            email: email,
            password: hash,
        });
        res.json("Success");
    });
});
module.exports = router;
