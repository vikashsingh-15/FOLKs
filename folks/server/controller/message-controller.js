import Message from "../model/Message.js";
import Conversation from "../model/Conversation.js";

export const newMessage = async (req, res) => {
  const newMessage = new Message(req.body);
  try {
    await newMessage.save();

    await Conversation.findByIdAndUpdate(req.body.conversationId, {
      latestMessage: {
        text: req.body.text,
        senderId: req.body.senderId,
        createdAt: new Date(), // or req.body.createdAt if available
        type: req.body.type,
      },
    });

    return res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error in sending message in message  controller" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find({ conversationId: req.params.id });
    res.status(200).json(messages);
  } catch (error) {
    // console.error("Error in getting messages:", error.message);
    res.status(500).json({ message: "Error in getting messages" });
  }
};
