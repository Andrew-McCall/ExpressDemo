const router = require("express").Router();

router.get("/get", (req, res) => {
    res.status(200).send("Hello World!")
})

router.post("/get", (req, res) => {
    res.status(200).send("Hello post!")
})

router.post("/post", (req, res) => {
    res.status(201).send(req.body)
})
 
router.put("/put", (req, res) => {
    res.status(202).send(req.body)
})

router.delete("/delete", (req, res) => {
    res.status(203).send(req.body)
})


module.exports = router; 