import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import http from "http"
import { Server } from "socket.io"

// Routes
import authRoutes from "./routes/authRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import connectionRoutes from "./routes/connectionRoutes.js"
import messageRoutes from "./routes/messageRoutes.js"

// Socket handler
import { socketHandler } from "./sockets/socket.js"

dotenv.config()

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// HTTP server
const server = http.createServer(app)

// Socket.io
const io = new Server(server, {
  cors: {
    origin: "*"
  }
})

socketHandler(io)

// Routes
app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/connect", connectionRoutes)
app.use("/api/messages", messageRoutes)

// Test route
app.get("/", (req, res) => {
  res.send("SkillSwap Backend Running 🚀")
})

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected")
  })
  .catch((error) => {
    console.log(error)
  })

const PORT = process.env.PORT || 5000

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})