const mongoose = require("mongoose");
const url = "mongodb+srv://admin:nGRLqKG7ZsQZAo6n@cluster0.jgzs6pq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
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