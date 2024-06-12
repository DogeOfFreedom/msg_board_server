const router = require("express").Router();
const message = require("../models/message");
const { getAllMessages, addMessage } = require("./controller")

router.get("/documents", async (req, res) => {
    try {
        const messages = await getAllMessages();
        res.json(messages)
    } catch (e) {
        console.log(e.message);
    }
})

router.post("/new", (req, res) => {
    try {
        addMessage(req.body.author, req.body.message);
        res.sendStatus(200);
    } catch (e) {
        res.sendStatus(500);
    }
    
})

router.get("/", (req, res) => {
    res.send("hello hello!!")
})

module.exports = router;