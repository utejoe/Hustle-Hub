// server/controllers/chatController.js
const Chat = require("../models/Chat");

// Send a message
exports.sendMessage = async (req, res) => {
  try {
    const chat = new Chat(req.body);
    await chat.save();
    res.status(201).json({ success: true, chat });
  } catch (err) {
    console.error("Send chat error:", err);
    res.status(500).json({ success: false, message: "Failed to send message" });
  }
};

// Get all chats between two users on a listing
exports.getChats = async (req, res) => {
  const { listingId, user1, user2 } = req.params;

  try {
    const chats = await Chat.find({
      listingId,
      $or: [
        { senderId: user1, receiverId: user2 },
        { senderId: user2, receiverId: user1 }
      ]
    }).sort({ timestamp: 1 });

    res.status(200).json({ success: true, chats });
  } catch (err) {
    console.error("Get chat error:", err);
    res.status(500).json({ success: false, message: "Failed to fetch chats" });
  }
};
