// Send message
router.post("/", async (req, res) => {
  const chat = new Chat(req.body);
  await chat.save();
  res.json({ success: true });
});

// Get chat between two users for a listing
router.get("/:listingId/:user1/:user2", async (req, res) => {
  const { listingId, user1, user2 } = req.params;
  const chats = await Chat.find({
    listingId,
    $or: [
      { senderId: user1, receiverId: user2 },
      { senderId: user2, receiverId: user1 }
    ]
  }).sort({ timestamp: 1 });
  res.json({ success: true, chats });
});
