const router = require("express").Router();
const { Blog, Comment, User } = require("../models");
const withAuth = require("../utils/auth")

router.get("/", async (req, res) => {
    try {
        let blogs = await Blog.findAll({
            include: User
        })
        blogs = blogs.map(blog => blog.get({ plain: true }))
        res.render("home", {
            blogs,
            logged_in: req.session.logged_in
        })
    } catch(err) {
        res.status(500).json(err)
    }
});

router.get("/dashboard", withAuth, async (req, res) => {
    try {
        let blogs = await Blog.findAll({
            where: {
                user_id: req.session.user_id
            },
            include: User
        })
        blogs = blogs.map(blog => blog.get({ plain: true }))
        res.render("dashboard", {
            blogs,
            url: req.originalUrl,
            logged_in: req.session.logged_in
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

router.get("/createblog", withAuth, async (req, res) => {
    try {
        let user = await User.findOne({
            where: {
                id: req.session.user_id
            }
        })
        user = user.get({ plain: true })
        res.render("createblog", {
            user,
            url: req.originalUrl,
            logged_in: req.session.logged_in
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

router.get("/editblog/:id", withAuth, async (req, res) => {
    try {
        let blog = await Blog.findOne({
            where: {
                id: req.params.id
            },
            include: User
        })
        blog = blog.get({ plain: true })
        res.render("editpost", {
            blog,
            url: req.originalUrl,
            logged_in: req.session.logged_in
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

router.get("/login", (req, res) => {
    res.render("login")
    
});

module.exports = router;