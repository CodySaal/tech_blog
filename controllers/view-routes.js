const router = require("express").Router();
const { Blog, Comment, User } = require("../models");

router.get("/", async (req, res) => {
    try {
        let blogs = await Blog.findAll({
            include: User
        })
        blogs = blogs.map(blog => blog.get({ plain: true }))
        res.render("home", {
            blogs
        })
    } catch(err) {
        res.status(500).json(err)
    }
})



module.exports = router;