import Message from "../models/Message.js"

// Send Message
export const sendMessage = async (req, res) => {

  try {

    const { senderId, receiverId, text } = req.body

    const message = await Message.create({
      senderId,
      receiverId,
      text
    })

    res.json(message)

  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Get Chat Messages
export const getMessages = async (req, res) => {

  try {

    const { senderId, receiverId } = req.query

    const messages = await Message.find({
      $or: [
        { senderId, receiverId },
        { senderId: receiverId, receiverId: senderId }
      ]
    }).sort({ createdAt: 1 })

    res.json(messages)

  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}