import Connection from "../models/Connection.js"
import mongoose from "mongoose"

// SEND CONNECTION REQUEST
export const sendConnection = async (req, res) => {

  try {

    const { senderId, receiverId } = req.body

    // prevent duplicate request
    const existing = await Connection.findOne({
      senderId,
      receiverId
    })

    if (existing) {
      return res.status(400).json({ message: "Request already sent" })
    }

    const connection = await Connection.create({
      senderId,
      receiverId,
      status: "pending"
    })

    res.status(201).json(connection)

  } catch (error) {

    res.status(500).json({ error: error.message })

  }

}


// ACCEPT CONNECTION
export const acceptConnection = async (req, res) => {

  try {

    const connection = await Connection.findByIdAndUpdate(
      req.params.id,
      { status: "accepted" },
      { new: true }
    )

    if (!connection) {
      return res.status(404).json({ message: "Connection not found" })
    }

    res.json(connection)

  } catch (error) {

    res.status(500).json({ error: error.message })

  }

}


// GET USER CONNECTIONS
export const getConnections = async (req, res) => {

  try {

    const userId = new mongoose.Types.ObjectId(req.params.userId)

    const connections = await Connection.find({
      $or: [
        { senderId: userId },
        { receiverId: userId }
      ]
    })
    .populate("senderId", "name skillsTeach skillsLearn")
    .populate("receiverId", "name skillsTeach skillsLearn")

    res.json(connections)

  } catch (error) {

    res.status(500).json({ error: error.message })

  }

}