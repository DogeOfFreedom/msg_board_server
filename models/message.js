const mongoose = require("mongoose");

const message = new mongoose.Schema({
    text: String,
    user: String,
    added: Date
})

message.post("save", () => console.log("document saved"))

module.exports = mongoose.model("Message", message)