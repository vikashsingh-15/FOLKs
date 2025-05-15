import Conversation from "../model/Conversation.js";

export const newConversation = async (req, res) => {
  try {
    const senderId = req.body.senderId;
    const receiverId = req.body.receiverId;
    const exist = await Conversation.findOne({
      members: { $all: [senderId, receiverId] },
    });
    if (exist) {
      // console.log("Conversation already exists", exist);
      return res.status(200).json({ message: "Conversation already exists" });
    }
    const newConversation = new Conversation({
      members: [senderId, receiverId],
      // message: req.body.message,
    });
    await newConversation.save();
    return res.status(200).json("Conversation saved successfully");
  } catch (error) {
    // console.error("Error creating conversation:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getConversation = async (req, res) => {
  try {
    const senderId = req.body.senderId;
    const receiverId = req.body.receiverId;
    const conversation = await Conversation.findOne({
      members: { $all: [senderId, receiverId] },
    });
    // if (!conversation) {
    //   return res.status(404).json({ message: "Conversation not found" });
    // }
    res.status(200).json(conversation);
  } catch (error) {
    // console.error("Error fetching conversation:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
