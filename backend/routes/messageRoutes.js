import express from "express"
import { sendMessage, getMessages } from "../controllers/messageController.js"

const router = express.Router()

// Send message
router.post("/send", sendMessage)

// Get chat messages
router.get("/", getMessages)

export default router