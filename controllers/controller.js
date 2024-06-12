const mongoose = require("mongoose");
// Deployed on adaptable.io
const url = "mongodb+srv://dogeoffree-main-db-0f3a2957d25:ngQZtWZAWTmqdt3MBGqnKXSAvtDxjB@prod-us-central1-1.lfuy1.mongodb.net/dogeoffree-main-db-0f3a2957d25"

// For local use only
// const url = "mongodb+srv://admin:nGRLqKG7ZsQZAo6n@cluster0.jgzs6pq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const Message = require("../models/message")
mongoose.connect(url);

const getAllMessages = async () => {
    try {
        const messages = await Message.find()
        console.log(messages);
        return messages;
    } catch (e) {
        throw e.message;
    }
}

const addMessage = async (author, msg) => {
    try {
        await Message.create({
            text: msg,
            user: author,
            added: Date.now()
        });
    } catch (e) {
        throw e.message;
    }   
}

module.exports = {
    getAllMessages,
    addMessage
}