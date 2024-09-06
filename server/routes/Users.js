const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");

const { sign } = require('jsonwebtoken');


let login_info = "";

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

//cheking login process
router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const user = await Users.findOne({
        where: { username: username },
    });
    //if no user is found
    if (!user) {
        res.json({ error: "User does not exist" });
        login_info = "User does not exist";

        //only compare user and hashed password if a username is found   
    } else bcrypt.compare(password, user.password).then((match) => {
        if (match) {
            login_info = `User ${username} has logged in`;
            //creating token based on the username and id
            const accessToken = sign({ username: user.username, id: user.id },
                "somesecret");
            console.log(`The user ${username} has been log in`);
            res.json(accessToken);
        } else {
            res.json({ error: "password and username does not match" });
            login_info = "password and username does not match";
        };
    });

});

router.post('/check_email', async (req, res) => {
    const { email } = req.body; // Extract email from the request body
    try {
        // Check if a user with the given email exists
        const user = await Users.findOne({
            where: { email } // Filter to match the email
        });

        // Send response based on the existence of the email
        return res.json({ exists: !!user }); // Convert the result to a boolean
    } catch (error) {
        console.error('Error checking email:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/check_username', async (req, res) => {
    const { username } = req.body; // Extract email from the request body
    try {
        // Check if a user with the given email exists
        const user = await Users.findOne({
            where: { username } // Filter to match the username
        });

        // Send response based on the existence of the username
        return res.json({ exists: !!user }); // Convert the result to a boolean

    } catch (error) {
        console.error('Error checking username:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

//displaying login info using get 
router.get("/user_login_info", (req, res) => {
    res.json({ login_info });
});

module.exports = router;