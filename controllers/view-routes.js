const router = require("express").Router();

router.get("/", (req, res) => {
    console.log(req)
    res.render("home")
})



module.exports = router;