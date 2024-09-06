const express = require("express");
const router = express.Router();
const { Blogs } = require("../models");

//use middleware to auth an user is valid to post any blog
const { validateToken } = require("../middlewares/AuthMiddleware");


//router of searching up blog of db
router.get("/", async (req, res) => {
    const listofBlogs = await Blogs.findAll();
    res.json(listofBlogs);
});

//finding blog by individual id and response to the page
router.get("/ID/:id", async (req, res) => {
    const id = req.params.id;
    //request sequelize blog model to find blog by Primary key(PK)
    const blog = await Blogs.findByPk(id);
    res.json(blog);
});

//router of creating blog for the website
router.post("/", validateToken, async (req, res) => {
    const { title, content, username } = req.body
    await Blogs.create({
        title: title,
        content: content,
        username: username,
    });
    res.json('blog created');
});

//router for navigate to creating blog
router.post("/createblog", validateToken, async (req, res) => {
    res.json("User is logged in");
});

module.exports = router;