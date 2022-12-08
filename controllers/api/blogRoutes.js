const router = require("express").Router();
const { Blog } = require("../../models")

router.post("/", async (req, res) => {
    try {
        const newBlog = await Blog.create({
            ...req.body,
            user_id: req.session.user_id
        })

        res.status(200).json(newBlog)
    } catch(err) {
        res.status(400).json(err);
    }
})

router.put("/:id", async (req, res) => {
    try {
        const updatedPost = await Blog.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json(updatedPost)
    } catch(err) {
        res.status(400).json(err);
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const destroyPost = await Blog.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            }
        })
        res.status(200).json(destroyPost)
    } catch(err) {
        res.status(500).json(err)
    }
})

module.exports = router;