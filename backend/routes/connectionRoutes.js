import express from "express"
import {
  sendConnection,
  acceptConnection,
  getConnections
} from "../controllers/connectionController.js"

const router = express.Router()

// send request
router.post("/send", sendConnection)

// accept request
router.put("/accept/:id", acceptConnection)

// get connections
router.get("/:userId", getConnections)

export default router