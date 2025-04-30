import Message from "../model/Message.js";
import Conversation from "../model/Conversation.js";

export const newMessage = async (req, res) => {
  console.log("New message function called");
  try {
    const newMessage = new Message(req.body);

    await newMessage.save();
    await Conversation.findByIdAndUpdate(req.body.conversationId, {
      latestMessage: req.body.text,
    });

    return res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Error in Message controller:", error.message);
    res.status(500).json({ message: "Error in sending message" });
  }
};
