const express = require("express");
const router = express.Router();
const { Blogs } = require("../models");

//router of searching up blog of db
router.get("/", async (req, res) => {
    const listofBlogs = await Blogs.findAll();
    res.json(listofBlogs);
});

//router of creating blog for the website
router.post("/", async (req, res) => {
    const { title, content, username } = req.body
    await Blogs.create({
        title: title,
        content: content,
        username: username,
    });
    res.json('blog created');
});

module.exports = router;